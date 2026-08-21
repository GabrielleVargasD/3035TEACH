import React, { useState } from 'react';
import filmes from "./filmes.json";

export const Check = () => {

    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <>
            {filmes.map((filme) => (
                <div>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}
                    />
                     {filme.nome}
                </div>
            ))}

        </>
    );

}