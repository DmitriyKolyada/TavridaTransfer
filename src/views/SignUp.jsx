const React = require('react');
const Layout = require('./Layout');

function SignUp() {
  return (
    <Layout>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            {/* Form */}
            <form className="signup-form" action="/signUp" method="POST">
              <div className="form-group mt-5">
                <input type="text" name="firstNameClient" className="form-control" placeholder="Ваше имя..." required />
              </div>
              <div className="form-group mt-5">
                <input type="text" name="lastNameClient" className="form-control" placeholder="Ваша фамиля..." required />
              </div>
              <div className="form-group mt-5">
                <input type="email" name="email" className="form-control" placeholder="email..." required />
              </div>
              <div className="form-group mt-5">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password..."
                  required
                />
              </div>
              <div className="text-center mt-5">
                <button type="submit" className="btn btn-secondary">&nbsp; register &nbsp;</button>
              </div>
            </form>
            {/* Form end */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = SignUp;
