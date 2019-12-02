import fetch from 'isomorphic-unfetch'
import Tweet from '../components/tweet'
import Link from 'next/link';


const App = ({tweets}) => {
    return (
        <div>
            <Link href="/about">
                <a>About Page</a>
            </Link>
            {
                tweets.map(t => {
                    return (
                    <Tweet key={t.handle} {...t} />
                    )
                })
            }
        </div>
    )
}

App.getInitialProps = async context => {

    //fetch initial timeline
    const response = await fetch (`http://localhost:3000/api/timeline`)

    let tweets = [];

    if(response.ok) {
        //console.log(await response.text())
        tweets = await response.json();

    }

    return {tweets}
}

export default App