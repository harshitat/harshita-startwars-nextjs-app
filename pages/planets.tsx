import List from '../components/List'
import axios from 'axios'

export const Planet = (props: any) => {
    return <List data={props.data} type="planets" />
}

export async function getStaticProps() {
    const { data } = await axios.get(`https://swapi.dev/api/planets/`)

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default Planet
