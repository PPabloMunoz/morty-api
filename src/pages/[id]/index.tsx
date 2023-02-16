import Image from 'next/image'

export default function IdPag({ params }: any) {
  console.log(params)
  return <h2>This is the Id Page</h2>
}

export async function getStaticPaths() {
  try {
    const { data } = await supabase.from('Products').select('id')
    const paths = data?.map((item) => ({
      params: {
        id: item.id,
      },
    }))

    return {
      paths,
      fallback: 'blocking',
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getStaticProps({ params }: { params: { id: String } }) {
  try {
    const { data } = await supabase
      .from('Products')
      .select()
      .eq('id', params.id)

    return {
      props: data![0],
    }
  } catch (error) {
    console.log(error)
  }
}
