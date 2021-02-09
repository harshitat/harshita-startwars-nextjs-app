import Link from 'next/link'

type Props = {
    data: any;
    type: string;
}

function List(props: Props) {
    return <table className="table table-hover table-striped table-dark table-bordered">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Details</th>
            </tr>
        </thead>
        <tbody>
            {
                props.data.results.map((r, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{r.name}</td>
                            <td><Link href={{
                                pathname: `/${props.type}/[slug]`,
                                query: { slug: i + 1 },
                            }}><button className="btn brn-sm btn-link " type="button">Get Detail</button></Link></td>
                        </tr>
                    )
                })
            }

        </tbody>
    </table>
}

export default List
