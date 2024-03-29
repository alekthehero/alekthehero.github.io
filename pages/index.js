import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'


export default function Home() {
  return (
    <div>
      <Head>
        <title>WIP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className=' text-xl font-burtons'>Alek</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className=' cursor-pointer text-xl'/>
              </li>
              <li>
                <a
                  className=' bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-4 py-2 rounded-md ml-8' 
                  href='#'
                >
                Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Alek Bronsky</h2>
            <h3 className='text-2xl py-2'>PAGE STILL WORK IN PROGRESS</h3>
            <p className='text-md py-5 leading-8 text-gray-700'>Studying computer engineering at the University Of Miami.</p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-700'>
            <AiFillTwitterCircle />
            <AiFillGithub />
            <AiFillLinkedin />
          </div>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={deved} layout="fill" objectfit="cover"/>
          </div>

        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I Offer</h3>
            <p className='text-md py-5 leading-8 text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum voluptas asperiores, inventore doloribus provident quae ea quo excepturi itaque veritatis, ullam blanditiis accusantium sint natus recusandae. Molestiae, labore quo.</p>
            <p className='text-md py-5 leading-8 text-gray-700'>More info about me</p>
          </div>
          
          <div className=''>
            <div className='text-center shadow-md shadow-gray-500 p-10 rounded-lg my-7'>
              <Image src={code} width={100} height={100} className="m-auto"/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Designs</h3>
              <p className='text-gray-700 py-2'>My personal designs or what ever I end up putting</p>
              <h4 className='py-4 text-teal-600'>Design tools</h4>
              <p className='text-gray-700 py-1'>example3</p>
              <p className='text-gray-700 py-1'>example2</p>
              <p className='text-gray-700 py-1'>example1</p>
              <p className='text-gray-700 py-1'>etc</p>
            </div>
            <div className='text-center shadow-md shadow-gray-500 p-10 rounded-lg my-7'>
              <Image src={consulting} width={100} height={100} className="m-auto"/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Designs</h3>
              <p className='text-gray-700 py-2'>My personal designs or what ever I end up putting</p>
              <h4 className='py-4 text-teal-600'>Design tools</h4>
              <p className='text-gray-700 py-1'>example3</p>
              <p className='text-gray-700 py-1'>example2</p>
              <p className='text-gray-700 py-1'>example1</p>
              <p className='text-gray-700 py-1'>etc</p>
            </div>
            <div className='text-center shadow-md shadow-gray-500 p-10 rounded-lg my-7'>
              <Image src={design} width={100} height={100} className="m-auto"/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Designs</h3>
              <p className='text-gray-700 py-2'>My personal designs or what ever I end up putting</p>
              <h4 className='py-4 text-teal-600'>Design tools</h4>
              <p className='text-gray-700 py-1'>example3</p>
              <p className='text-gray-700 py-1'>example2</p>
              <p className='text-gray-700 py-1'>example1</p>
              <p className='text-gray-700 py-1'>etc</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Portofolio</h3>
            <p className='text-md py-5 leading-8 text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum voluptas asperiores, inventore doloribus provident quae ea quo excepturi itaque veritatis, ullam blanditiis accusantium sint natus recusandae. Molestiae, labore quo.</p>
            <p className='text-md py-5 leading-8 text-gray-700'>More info about me</p>
          </div>
          <div>
            <div>
              <Image src={web1}/>
            </div>
            <div>
              <Image src={web2}/>
            </div>
            <div>
              <Image src={web3}/>
            </div>
            <div>
              <Image src={web4}/>
            </div>
            <div>
              <Image src={web5}/>
            </div>
          </div>
        </section>

      </main>

      
    </div>
  )
}
