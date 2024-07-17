import { PageParams } from "@/types";

interface AbountPropsI extends PageParams {

}
export default async function About(props: AbountPropsI) {

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>About</h1>
        <p className='text-gray-500'>Description</p>
      </div>
    </section>
  )
}