const createTransferButton = document.querySelector('.create-route');
console.log('~ createTransferButton--------------', createTransferButton);
const transferDateInput = document.querySelector('#transferDate');
const transferTimeInput = document.querySelector('#transferTime');
const transferClassInput = document.querySelector('#transferClass');
const commentOnOrderInput = document.querySelector('#commentOnOrder');

function init() {
  const yaMap = new ymaps.Map('map', {
    center: [45.04895910115765, 33.98003939587402],
    zoom: 9,
    controls: ['routePanelControl'],
  });

  const control = yaMap.controls.get('routePanelControl');
  // console.log('~ control', control);

  control.routePanel.options.set({
    // Routing types to display on the panel.
    // Users can switch between these types.
    types: {
      auto: true,
    },
  });

  // Получение мультимаршрута.
  const multiRoutePromise = control.routePanel.getRouteAsync();

  multiRoutePromise.then((multiRoute) => {
  // Подписка на событие обновления мультимаршрута.
    multiRoute.model.events.add('requestsuccess', () => {
    // Получение ссылки на активный маршрут.
      const activeRoute = multiRoute.getActiveRoute();
      if (activeRoute) {
        const distance = activeRoute.properties.get('distance').text.replace(/\s\W*/gm, '');
        const travelTime = activeRoute.properties.get('duration').text;
        const departurePoint = activeRoute.properties.get('boundedBy')[0].join();
        const arrivalPoint = activeRoute.properties.get('boundedBy')[1].join();
        console.log('Длина:=================++++++', distance);
        console.log('Время в пути:', travelTime);
        console.log(`Начальная точка:${departurePoint}`);
        console.log(`Конечная точка:${arrivalPoint}`);
        createTransferButton.addEventListener('click', async (event) => {
          console.log('click');
          event.preventDefault();
          try {
            const transferDate = transferDateInput.valuetoDateString().splice(0, 10);
            console.log('~ transferDate=========---------', transferDate)
            const transferTime = transferTimeInput.value.splice(0, 4);
            const transferClass = transferClassInput.value;
            const commentOnOrder = commentOnOrderInput.value;
            const costOfTheTransfer = Number(distance) * 50;

            // console.log(trackName);
            // const location = locationName.value;
            const responce = await fetch('/newTransfer', {
              method: 'POST',
              headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify({
                transferDate,
                transferTime,
                transferClass,
                commentOnOrder,
                distance,
                travelTime,
                departurePoint,
                arrivalPoint,
                costOfTheTransfer,
              }),
            });
            await responce.json();
          } catch (error) {
            console.log(error);
          }
        });
      }
    });
  }, (err) => {
    console.log(err);
  });
}

ymaps.ready(init);
