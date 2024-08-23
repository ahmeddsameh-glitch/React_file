import './home.css'
const Home = () =>{
    return (
        <>
        <header>
        <div className="Welcome-div">
            <h1 className="Welcome-message">Welcome to the BlogApp</h1>
            <p className='text'>Discover the best blogs and share your thoughts with the world</p>
        </div>
        <button>Get Started</button>
        </header>
        <section className="Welcome-section">
         <div className='section-components'>
        <h1>Write and Share</h1>
        <p>Share your thoughts, experiences, and opinions with others. Discover new ideas and inspire others.</p>
         </div>
         <div className='section-components'>
        <h1>Connect and Engage</h1>
        <p>Connect with fellow bloggers, share updates, and receive valuable feedback. Engage with your audience and create lasting memories.</p>
         </div>
         <div className='section-components'>
        <h1>Track and Grow</h1>
        <p>Track your blog's performance, engagement, and growth. Stay informed about your audience's interests and preferences.</p>
         </div>
       </section>     
    </>
    )
}

export default Home;