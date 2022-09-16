const React = require('react');
const Layout = require('./Layout');

function newTransfer({ client }) {
  return (
    <Layout client={client}>
      <h2>Заказ нового трансфера</h2>
      <form method="post" action="/newTransfer" style={{ width: '35rem' }}>
        <div className="mb-3">
          <label htmlFor="transferDate" className="form-label">
            Дата заказа трансфера
            <input name="transferDate" type="date" className="form-control" id="transferDate" aria-describedby="emailHelp" placeholder="Введите предпологаемую дату трансфера" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="transferTime" className="form-label">
            Время заказа трансфера
            <input name="transferTime" type="time" className="form-control" id="transferTime" aria-describedby="emailHelp" placeholder="Укажите время подачи автомобиля" />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="floatingSelect">
            Выберите класс трансфера
            <br />
            <select className="form-select" id="transferClass" aria-label="Floating label select example" name="transferClass">
              <option value="" />
              <option value="standard">Стандарт</option>
              <option value="comfort">Комфорт</option>
              <option value="business">Бизнес</option>
              <option value="vip">VIP</option>
              <option value="minivan">Минивен</option>
            </select>
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="commentOnOrder">
            Комментарий к заказу
            <textarea name="commentOnOrder" className="form-control" placeholder="Укажите Ваш комментарий" id="commentOnOrder" style={{ width: '200px', height: '100px' }} />
          </label>
        </div>
        <div id="map" className="map" style={{ width: '600px', height: '500px' }} />
        <div className="create-route">
          <button type="submit" className="btn btn-outline-success">Заказать трансфер</button>
        </div>
        {/* <script src="/js/yaMap.js" type="text/javascript" /> */}
      </form>
    </Layout>
  );
}

module.exports = newTransfer;
