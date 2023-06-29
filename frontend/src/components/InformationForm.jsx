/* eslint-disable jsx-a11y/label-has-associated-control */
function InformationForm() {
  return (
    <div className="main-menu">
      <h1 className="titleMainMenu">Recherche un téléphone déjà existant</h1>
      <form action="#" className="form-categorize">
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline" />
            <label htmlFor="">ID</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline" />
            <label htmlFor="">Modèle</label>
          </div>
        </div>

        <button type="button" className="linkMenu">
          Recherche
        </button>
      </form>
    </div>
  );
}

export default InformationForm;