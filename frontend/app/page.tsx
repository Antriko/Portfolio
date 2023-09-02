import Nav from '@/components/nav.js'
import Header from '@/components/header.js'
import AboutMe from '@/components/aboutMe.js'
import Projects from '@/components/projects.js'
import Footer from '@/components/footer.js'

export default function Home() {
  return (
    <main>
        {Nav()}
        <div className="flex flex-wrap w-full">
            {Header()}
            {AboutMe()}
            {Projects()}
            {Footer()}
        </div>
    </main>
  )
}

