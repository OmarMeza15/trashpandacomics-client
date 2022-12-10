import React from 'react'
import SocialMediaLinks from '../../components/SocialMediaLinks'
import './styles.css'

const FAQ = () => {
  return (
    <div className="bg-black text-white">

      <h1 className="text-4xl mb-32 pt-16">FAQ</h1>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-16 text-left font-light mx-44 mb-32">
        <div className="card leading-loose">
          <h2 className="text-xl mb-10 font-medium tracking-tighter ">HOW LONG DOES THE PROCESS TAKE?</h2>
          <p>Turnaround time depends on several different factors, but the main aspects are the length and style of the comic. Generally, most comics take somewhere between 3 days and 3 weeks to create, but we're happy to give you a personalized timetable once we've discussed details and deadlines! To do this, please fill out our contact form and we'll get in contact with you within 24-48 hours! Thank you!</p>
        </div>

        <div className="card leading-loose">
          <h2 className="text-xl mb-10 font-medium tracking-tighter">ARE REVISIONS INCLUDED IN THE PRICE?</h2>
          <p>Yes, two revisions are included in each package, regardless of page count! The first revision takes place after the pages are inked at this point, you'll be able to request changes, additions, and corrections without any limitation. The second revision comes after the comic has been colored this time you'll be able to request changes in colors, small details, and additions/changes to text boxes and speech bubbles.</p>
        </div>

        <div className="card leading-loose">
          <h2 className="text-xl mb-10 font-medium tracking-tighter">DO YOU SHIP WORLDWIDE?</h2>
          <p>Originally, our comics come in print-ready PDF form that customers receive via e-mail and can easily get printed locally. We offer full assistance from finding a reliable local printing company to providing details and specifications for the best possible results. If you'd like to receive a physical copy as well, we offer a shipping upgrade that covers both professional printing and worldwide shipping. We have partners in several countries, so you won't have to worry about lengthy delivery times either!</p>
        </div>

        <div className="card leading-loose">
          <h2 className="text-xl mb-10 font-medium tracking-tighter">DO YOU ACCEPT COMMISSIONS AT THE MOMENT?</h2>
          <p>Commissions are open all year round, but since Trashpandacomic is a small business operating with only one artist at the moment, it's not uncommon for us to be booked for 1-2 months in advance, especially during the Holidays. It is still possible to place your order for a later date and start the process during this time, but if you're operating with a strict deadline, please make sure to reach out to us in advance to make sure your comic can be finished and potentially delivered in time!</p>
        </div>
      </div>

      <SocialMediaLinks />
    </div>
  )
}

export default FAQ