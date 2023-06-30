/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line react/prop-types
function Login({ setIsLogged }) {
  return (
    <div className="contentMain">
      <form action="#" className="form-categorize">
        <div className="form-row">
          <div className="input-data">
            <input type="text" name="indice" id="indice" required />
            <div className="underline" />
            <label htmlFor="indice">Pseudo</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="password" name="indice" id="indice" required />
            <div className="underline" />
            <label htmlFor="indice">Mot de passe</label>
          </div>
        </div>
      </form>

      <button
        type="button"
        className="linkMenu linkLogin"
        onClick={() => setIsLogged(true)}
      >
        Connectez vous
      </button>
    </div>
  );
}

export default Login;
