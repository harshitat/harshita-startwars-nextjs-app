import axios from 'axios'
import List from '../components/List'

export const Species = (props: any) => {
    return <List data={props.data} type="species" />
}

export async function getStaticProps() {
    const { data } = await axios.get(`https://swapi.dev/api/species/`)

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default Species
