import React, { useState } from 'react';


function GestionEmployesApp() {
    const [employes, setEmployes] = useState([]);
    const [formData, setFormData] = useState({ prenom: '', nom: '', poste: '', departement: '', date_debut: '', email: '', editId: '' });

    const clearList = () => {
        setEmployes([]);
    };

    const remove = (id) => {
        setEmployes(employes.filter(employe => employe.id !== id));
    };

    const edit = (id) => {
        const employeToEdit = employes.find(employe => employe.id === id);
        setFormData({ ...employeToEdit, editId: id });
    };

    const save = () => {
        const { prenom, nom, poste, departement, date_debut, email, editId } = formData;

        if (prenom === "" || nom === "" || poste === "" || departement === "" || date_debut === "" || email === "") {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        if (editId) {
            setEmployes(employes.map(employe => employe.id === editId ? { ...formData } : employe));
            setFormData({ prenom: '', nom: '', poste: '', departement: '', date_debut: '', email: '', editId: '' });
        } else {
            const newEmploye = {
                id: Date.now(),
                prenom,
                nom,
                poste,
                departement,
                date_debut,
                email
            };
            setEmployes([...employes, newEmploye]);
        }
    };

    return (
        <div className="app-container">
            <div className="container mt-5">
                <div className="row">
                    <div className="card col-md-3 form-card">
                        <div className="card-header text-center">Informations Employé</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Prénom</label>
                                <input className="form-control" type="text" placeholder="Prénom" required value={formData.prenom} onChange={(e) => setFormData({ ...formData, prenom: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Nom</label>
                                <input className="form-control" type="text" placeholder="Nom" required value={formData.nom} onChange={(e) => setFormData({ ...formData, nom: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Poste</label>
                                <input className="form-control" type="text" placeholder="Poste" required value={formData.poste} onChange={(e) => setFormData({ ...formData, poste: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Département</label>
                                <input className="form-control" type="text" placeholder="Département" required value={formData.departement} onChange={(e) => setFormData({ ...formData, departement: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Date de Début</label>
                                <input className="form-control" type="date" required value={formData.date_debut} onChange={(e) => setFormData({ ...formData, date_debut: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" onClick={save}>Enregistrer</button>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-9 text-center list-card">
                        <div className="card-header">
                            Liste des Employés
                            <button className="btn btn-sm btn-dark" onClick={clearList}>Vider</button>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Prénom</th>
                                        <th>Nom</th>
                                        <th>Poste</th>
                                        <th>Département</th>
                                        <th>Date de Début</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employes.map(employe => (
                                        <tr key={employe.id}>
                                            <td>{employe.id}</td>
                                            <td>{employe.prenom}</td>
                                            <td>{employe.nom}</td>
                                            <td>{employe.poste}</td>
                                            <td>{employe.departement}</td>
                                            <td>{employe.date_debut}</td>
                                            <td>{employe.email}</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={() => remove(employe.id)}>Supprimer</button>
                                                <button className="btn btn-warning btn-sm" onClick={() => edit(employe.id)}>Modifier</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GestionEmployesApp;

