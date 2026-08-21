import React, { useState } from "react";
import filmes from "./filmes.json";

export const Check = () => {

    const [listaFilmes, setListaFilmes] = useState(filmes);

   const handleChange = (id) => {

    setListaFilmes(
        listaFilmes.map((filme) => {

            if (filme.id === id) {

                if (!filme.checked) {
                    alert(`Filme selecionado: ${filme.nome}`);
                }

                return {
                    ...filme,
                    checked: !filme.checked
                };
            }

            return filme;
        })
    );
};

    return (
        <>
            {listaFilmes.map((filme) => (
                <div key={filme.id}>

                    <input
                        type="checkbox"
                        checked={filme.checked}
                        onChange={() => handleChange(filme.id)}
                    />

                    {filme.nome}

                </div>
            ))}
        </>
    );
};