/* eslint-disable jsx-a11y/label-has-associated-control */
function CategorizeForm() {
  return (
    <div className="main-menu">
      <h1 className="titleMainMenu">
        Commencer l'Enregistrement de nouveaux téléphones
      </h1>
      <form action="#" className="form-categorize">
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline" />
            <label htmlFor="">Modèle</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline" />
            <label htmlFor="">RAM</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline" />
            <label htmlFor="">Stockage</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline" />
            <label htmlFor="">Indice Antutu</label>
          </div>
        </div>
        <button type="button" className="linkMenu">
          Confirmez l'enregistrement
        </button>
      </form>
    </div>
  );
}

export default CategorizeForm;
