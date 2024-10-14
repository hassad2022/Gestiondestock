import React, { useState } from 'react';

function Application() {
    const [produits, setProduits] = useState([]);
    const [nouveauProduit, setNouveauProduit] = useState({ nom: '', quantite: '', statut: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNouveauProduit(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProduits([...produits, nouveauProduit]);
        setNouveauProduit({ nom: '', quantite: '', statut: '' });
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="text-center">Liste des Produits en Stock</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nom du Produit</th>
                                <th scope="col">Quantité</th>
                                <th scope="col">Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produits.map((produit, index) => (
                                <tr key={index}>
                                    <td>{produit.nom}</td>
                                    <td>{produit.quantite}</td>
                                    <td>{produit.statut}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <h2 className="text-center">Ajouter un Produit</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nomProduit" className="form-label">Nom du Produit</label>
                            <input type="text" className="form-control" id="nomProduit" name="nom" value={nouveauProduit.nom} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantiteProduit" className="form-label">Quantité</label>
                            <input type="number" className="form-control" id="quantiteProduit" name="quantite" value={nouveauProduit.quantite} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="statutProduit" className="form-label">Statut</label>
                            <select className="form-select" id="statutProduit" name="statut" value={nouveauProduit.statut} onChange={handleChange} required>
                                <option value="">Sélectionner le statut</option>
                                <option value="Disponible">Disponible</option>
                                <option value="Rupture de stock">Rupture de stock</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Enregistrer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Application;

