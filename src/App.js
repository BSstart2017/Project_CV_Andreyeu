import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
        <div className='header'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/2000px-NBC_logo.svg.png' /></div>
        <div className='siteBar'>
          <div><a href='#'>Profile</a></div>
          <div><a href='#'>Messages</a></div>
          <div><a href='#'>News</a></div>
          <div><a href='#'>Music</a></div>
          <div><a href='#'>Settings</a></div>
        </div>
        <div className='main'>
          <div><img src='https://www.korcula-larus.com/wp-content/uploads/2018/06/holiday-house-korcula-more-beach-06.jpg' /></div>
          <div><img src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' />
            <h2>description</h2>
          </div>
          <div>
            my post
            <div>
              new post
              <div>
              post 1
            </div>
            <div>
            post 2
          </div>
            </div>
          </div>
        </div>
        <div className='footer'> footer</div>
    </div>
  );
}

export default App;
