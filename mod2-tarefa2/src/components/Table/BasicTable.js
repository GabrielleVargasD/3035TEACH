import React, { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";
import filmes from "./filmes.json";
import { COLUMNS } from "./columns";
import "./table.css";

export const BasicTable = () => {

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => filmes, []);

    const tableInstance = useTable(
        {
            columns: columns,
            data: data
        },
        useGlobalFilter
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter
    } = tableInstance;

    return (
        <>
            <input
                type="text"
                placeholder="Pesquise aqui"
                onChange={(e) => setGlobalFilter(e.target.value)}
            />

            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render("Header")}
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>

                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row);

                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell => (
                                            <td {...cell.getCellProps()}>
                                                {cell.render("Cell")}
                                            </td>
                                        ))
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
};