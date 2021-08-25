import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import CodeSnippet from "@site/src/theme/CodeSnippet";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const samples = [
  {
    snippet: `// Given some classes 
class Controller(val service: BusinessService) 
class BusinessService() 

// just declare it 
val myModule = module { 
  single { Controller(get()) }
  single { BusinessService() }
}
`
  },
  {
    snippet: `// Controller & BusinessService are declared in a module
class Controller(val service: BusinessService) { 
  
  fun hello() {
    // service is ready to use
    service.sayHello()
  }
} `
  },
  {
    snippet: `// Just inject in a simple Activity 
class MyActivity() : AppCompatActivity() {

  // inject BusinessService into property
  val service: BusinessService by inject()
}`
  },
  {
    snippet: `// Injected by constructor
class MyViewModel(val repo: MyRepository) : ViewModel()

// declared ViewModel using the viewModel keyword
val myModule : Module = module {
  viewModel { MyViewModel(get()) } 
  single { MyRepository() }
}

// Just get it
class MyActivity() : AppCompatActivity() {

  // lazy inject MyViewModel
  val myViewModel: MyViewModel by viewModel()
}`
  }
]

const starts = [
  {
    label: 'Kotlin',
    snippet: `fun main(vararg args: String) { 
  // start Koin!
  startKoin {
    // declare modules
    modules(myModule)
  }
} `
  },
  {
    label: 'Android',
    snippet: `class MyApplication : Application() {
  override fun onCreate() {
    super.onCreate()
    // start Koin!
    startKoin {
      // declare used Android context
      androidContext(this@MyApplication)
      // declare modules
      modules(myModule)
    }
  } 
} `
  }
]

const sponsors = [
  {
    imageUrl: `/docs/img/sponsors/stream-logo.png`
  }
]

const features = [
  {
    title: 'Declare',
    imageUrl: 'img/playlist_add_check-24px.svg',
    description: (
      
      <>
        <p>Use the <code>Koin DSL</code> to describe your components definitions</p>
        <CodeSnippet snippet={samples[0].snippet} lang="kotlin"></CodeSnippet>
      </>
    ),
  },
  {
    title: 'Start',
    imageUrl: 'img/power_settings_new-24px.svg',
    description: (
      <><p>Just run <code>startKoin</code> function in your application</p>
        {starts && starts.length && (
                <Tabs defaultValue={starts[0].label} values={starts.map((props, idx) => {
                  return {label:props.label, value:props.label};
                })}>
                  {starts.map((props, idx) => (
                    <TabItem value={props.label}>
                      <CodeSnippet snippet={props.snippet} lang="kotlin"></CodeSnippet>
                    </TabItem>
                  ))}
                </Tabs>
              )}
      </>
    ),
  },
  {
    title: 'Inject Constructors',
    imageUrl: 'img/settings_ethernet-24px.svg',
    description: (
      <>
        <p> Instances are <code>resolved</code> from your modules </p>
        <CodeSnippet snippet={samples[1].snippet} lang="kotlin"></CodeSnippet>
      </>
    ),
  },
  {
    title: 'Easy for Android',
    imageUrl: 'img/android-24px.svg',
    description: (
      <>
        <p> Just <code>inject</code> into your Android classes</p>
        <CodeSnippet snippet={samples[2].snippet} lang="kotlin"></CodeSnippet>
      </>
    ),
  }
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          
        </div>
      )}
      <h3> {title} <img className={styles.featureImage} src={imgUrl} alt={title} /></h3>
      <p>{description}</p>
    </div>
  );
}

function Sponsor({imageUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Description will go into a meta tag in <head />">
      <div className={styles.hero}>
          <div className={styles.heroInner}>
          <div className="container">
          <div className="row">
              
              <br/>
              <h1 className={styles.heroProjectTagline}>
              Koin - a smart Kotlin{' '}
              <span className={styles.heroProjectKeywords}>injection</span> library{' '}

              </h1>
              <h1 className={styles.heroProjectTagline}>
              to keep you {' '}
                <span className={styles.heroProjectKeywords}>focused</span> on your app,{' '}
              not on your tools{' '}
              </h1>
            
              <br/>
              <div className={styles.indexCtas}>
                <Link
                  className={styles.indexCtasGetStartedButton}
                  to={useBaseUrl('docs/quickstart/kotlin')}>
                  Get Started
                </Link>
                ' '
                <Link
                  className={styles.indexCtasSetupButton}
                  to={useBaseUrl('docs/setup/v3')}>
                  Setup
                </Link>
                <span className={styles.indexCtasGitHubButtonWrapper}>
                  <iframe
                    className={styles.indexCtasGitHubButton}
                    src="https://ghbtns.com/github-btn.html?user=InsertKoinIO&amp;repo=koin&amp;type=star&amp;count=true&amp;size=large"
                    width={160}
                    height={30}
                    title="GitHub Stars"
                  />
                </span>
            </div>
            
          </div>
          </div>
          </div>
          
        </div>
        <section className={styles.features}>
            <div className="container">
              <div className="row">
                <div className={clsx('center col col--1', styles.feature)} />
                  <div className={clsx('center col col--10', styles.feature)}>
                  <img className={styles.heroImg} src="img/koin_2.0.png" />
                  </div>
                </div>
              </div>
              </section>
       
        {/* <div className={clsx(styles.announcement, styles.announcementDark)}>
          <div className={styles.announcementInner}>
            Coming from v1? Check out our{' '}
            <Link to={useBaseUrl('/docs/migrating-from-v1-to-v2')}>
              v1 to v2 migration guide
            </Link>
          </div>
        </div> */}

        <br/><br/>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <br/>
        <br/>
        <br/>
        <br/>
        <section className={styles.announcement}>
        <h2> Special Thanks to our Sponsors ❤️ - <a href="https://opencollective.com/koin#sponsors">Open Collective</a></h2>
            <div className="container" height="240">
                <a href="https://getstream.io/chat/sdk/android/?utm_source=koin&utm_medium=sponsorship&utm_content=developer"><img className={styles.indexCtasGitHubButton} src="/img/sponsors/stream-logo.png" width="210"/></a>
                <a href="https://onlinecasinohex.ca/"><img className={styles.indexCtasGitHubButton} src="/img/sponsors/hex2.png" width="210"/></a>
            </div>
        </section>   
        <br/>
    </Layout>
  );
}

export default Home;
