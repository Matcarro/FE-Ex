import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import DetailsRow from '../components/detailsRow';
import { deleteAutomezzoByCodice, deleteFilialeByCodice } from '../services/apiServices';

interface GestioneProps {
    automezzi: any[];
    filiali: any[];
}

const Gestione: React.FC<any> = ({ automezzi, filiali }) => {
    const [newAutomezzo, setNewAutomezzo] = useState({ codice: '', targa: '', marca: '', modello: '' });
    const [newFiliale, setNewFiliale] = useState({ codice: '', indirizzo: '', città: '', cap: '' });
    const navigate = useNavigate();

    const navigateToAutomezzo = (code: string) => {
        navigate(`/automezzo/${code}`);
    }

    const navigateToFiliale = (code: string) => {
        navigate(`/filiale/${code}`);
    }

    const deleteAutomezzoByCode = (code: string) => {
        deleteAutomezzoByCodice(code)
    }

    const deleteFilialeByCode = (code: string) => {
        deleteFilialeByCodice(code)
    }

    function handleAddAutomezzo(event: any): void {
        throw new Error('Function not implemented.');
    }

    function handleAddFiliale(event: any): void {
        throw new Error('Function not implemented.');
    }

    return (
        <>
            <div className="column-header">
                <h2>Automezzi</h2>
                <div className="column">
                    {automezzi.map((automezzo: any) => (
                        <DetailsRow key={automezzo.codice} {...automezzo} onDettagliClick={navigateToAutomezzo} onDeleteClick={deleteAutomezzoByCode} />
                    ))}
                </div>
                <form onSubmit={handleAddAutomezzo}>
                    <input type="text" placeholder="Codice" value={newAutomezzo.codice} onChange={(e) => setNewAutomezzo({ ...newAutomezzo, codice: e.target.value })} />
                    <input type="text" placeholder="Targa" value={newAutomezzo.targa} onChange={(e) => setNewAutomezzo({ ...newAutomezzo, targa: e.target.value })} />
                    <input type="text" placeholder="Marca" value={newAutomezzo.marca} onChange={(e) => setNewAutomezzo({ ...newAutomezzo, marca: e.target.value })} />
                    <input type="text" placeholder="Modello" value={newAutomezzo.modello} onChange={(e) => setNewAutomezzo({ ...newAutomezzo, modello: e.target.value })} />
                    <button type="submit">Aggiungi Automezzo</button>
                </form>
            </div>
            <div className="column-header">
                <h2>Filiali</h2>
                <div className="column">
                    {filiali.map((filiale: any) => (
                        <DetailsRow key={filiale.codice} {...filiale} onDettagliClick={navigateToFiliale} onDeleteClick={deleteFilialeByCode} />
                    ))}
                </div>
                <form onSubmit={handleAddFiliale}>
                    <input type="text" placeholder="Codice" value={newFiliale.codice} onChange={(e) => setNewFiliale({ ...newFiliale, codice: e.target.value })} />
                    <input type="text" placeholder="Indirizzo" value={newFiliale.indirizzo} onChange={(e) => setNewFiliale({ ...newFiliale, indirizzo: e.target.value })} />
                    <input type="text" placeholder="Città" value={newFiliale.città} onChange={(e) => setNewFiliale({ ...newFiliale, città: e.target.value })} />
                    <input type="text" placeholder="CAP" value={newFiliale.cap} onChange={(e) => setNewFiliale({ ...newFiliale, cap: e.target.value })} />
                    <button type="submit">Aggiungi Filiale</button>
                </form>
            </div>
        </>
    );
}

export default Gestione;
