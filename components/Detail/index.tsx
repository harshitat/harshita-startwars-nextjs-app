type Props = {
    data: any
}

function Detail(props: Props) {
    if (!props.data) {
        return <>Loading...</>
    }
    return (
        <table className="table table-hover table-striped  table-bordered">
            <tbody>
                {Object.keys(props.data).map((k, i) => {
                    return (
                        <tr key={i}>
                            <td>{k.toUpperCase()}</td>
                            <td>{props.data[k]}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Detail
