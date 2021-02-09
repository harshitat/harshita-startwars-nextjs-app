import axios from 'axios'
import Detail from '../../components/Detail'

export const Planet = (props: any) => {
    return <Detail data={props.data} />
}

// This function gets called at build time
export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { slug: '1' },
            },
        ],
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const { data } = await axios.get(`https://swapi.dev/api/people/${params.slug}`)

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
