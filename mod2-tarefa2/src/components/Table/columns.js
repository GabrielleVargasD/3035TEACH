export const COLUMNS = [
    {
        Header: "ID",
        accessor: "id"
    },
    {
        Header: "Nome",
        accessor: "nome"
    },
    {
        Header: "Gênero",
        accessor: "genero"
    },
    {
        Header: "Imagem",
        accessor: "imagem",
        Cell: ({ value }) => (
            <img
                src={value}
                alt="Imagem do filme"
                style={{
                    width: "80px",
                    height: "120px",
                    objectFit: "cover"
                }}
            />
        )
    }
];