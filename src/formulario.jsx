// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Formulario() {
  const [musicData, setMusicData] = useState([]);
  const [nomeMusica, setNomeMusica] = useState('');
  const [nomeBanda, setNomeBanda] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateInput()) {
      alert('Por favor, verifique os dados inseridos no formulário');
      return;
    }

    const novaMusica = {
      nome: nomeMusica,
      banda: nomeBanda
    };
    setMusicData([...musicData, novaMusica]);
    clearForm();
  };

  const validateInput = () => {
    const musicaValida = nomeMusica.trim().length >= 3 && !nomeMusica.trim().startsWith(' ');
    const bandaValida = nomeBanda.length >= 2;
    return musicaValida && bandaValida;
  };

  const clearForm = () => {
    setNomeMusica('');
    setNomeBanda('');
  };

  const clearMusicData = () => {
    setMusicData([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome da música:
            <input
              type="text"
              value={nomeMusica}
              onChange={(event) => setNomeMusica(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Nome da banda:
            <input
              type="text"
              value={nomeBanda}
              onChange={(event) => setNomeBanda(event.target.value)}
            />
          </label>
        </div>
        <div>
        <button className="button" type="submit">Enviar</button>
        <button className="button" type="button" onClick={clearForm}>Limpar</button>
        <button className="button" type="button" onClick={clearMusicData}>Limpar Lista</button>
      </div>
      </form>

      <h2>Lista de músicas:</h2>
      <ul>
        {musicData.map((musica, index) => (
          <li key={index}>
            <strong>Música:</strong> {musica.nome} <strong>Banda:</strong> {musica.banda}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Formulario;
