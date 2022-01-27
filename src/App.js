import './App.css';

// Default Export with Component
import Greet from './component/Greet'; //Imported From Default Export

// Named Export with Component
import { Greet2 } from './component/Greet2'; //Imported From Named Export

// Component
import Welcome from './component/Welcome';
import { Hello } from './component/Hello';

// Props
import GreetWithProps from './component/GreetWithProps'
import WelcomeWithProps from './component/WelcomeWithProps'

// State
import MessageWithState from './component/MessageWithState'
import Counter from './component/Counter'

// Basic Event Handling
import FunctionClick from './component/FunctionClick'
import ClassClick from './component/ClassClick'

// Event Binding
import EventBind from './component/EventBind'

// Parent Child
import ParentComponent from './component/ParentComponent'

// Conditional Rendering
import ConditionalRendering from './component/ConditionalRendering'

// List Render wit Key and Map function
import NameList from './component/NameList'
import PersonList from './component/PersonList'

// Styling and CSS
import Stylesheet from './component/Stylesheet'
import InlineCSS from './component/InlineCSS'
import CSSModule from './component/CSSModule'

// Form
import Form from './component/Form'

// React Lifecycle
import LifecycleA from './component/LifecycleA'

// Fragment
import Fragment from './component/Fragment'
import Table from  './component/Table'

// Pure
import PureComp from './component/PureComp'
import TestPureComp from './component/TestPureComp'

// Memo
import TestMemoComponent from './component/TestMemoComponent'

// Ref 
import RefsComponent from './component/RefsComponent'
import FocusInput from './component/FocusInput';
import ForwardRefParentInput from './component/ForwardRefParentInput'

// Portals
import TestPortal from './component/TestPortal'

// ErrorBoundary
import Hero from './component/Hero'
import ErrorBoundary from './component/ErrorBoundary'

// Advanced HOC
import ClickCounter from './component/ClickCounter'
import HoverCounter from './component/HoverCounter'

// Advanced HOC
import ProductList from './component/ProductList'

// Render Props Pattern
import ClickCounterTwo from './component/ClickCounterTwo'
import HoverCounterTwo from './component/HoverCounterTwo'

import RenderPropsCounter from './component/RenderPropsCounter'
import RenderPropsCounter2 from './component/RenderPropsCounter2'

// Context API
import ComponentC from './component/ComponentC'
import { UserProvider } from './component/userContext';

// HTTP Get 
import PostList from './component/PostList'
import { PostProvider } from './component/postContext'

// HTTP Post 
import PostForm from './component/PostForm'

// useState Hook Component
import HookCounter from './hookComponent/HookCounter';

// useState Hook Component with prevState
import HookCounterTwo from './hookComponent/HookCounterTwo'

// useState Hook Component with prevState using Object
import HookCounterThree from './hookComponent/HookCounterThree';

// useState Hook Component with prevState using Array
import HookCounterFour from './hookComponent/HookCounterFour'

// useEffect Hook Component
import HookCounterOneWithUseEffect from './hookComponent/HookCounterOneWithUseEffect'

// useEffect Hook Component with Conditionally run effects 
import HookCounterTwoWithUseEffect from './hookComponent/HookCounterTwoWithUseEffect'

// useEffect Hook Component with Run effects only once
import HookCounterThreeWithUseEffect from './hookComponent/HookCounterThreeWithUseEffect'

// useEffect Hook Component with cleanup
import HookCounterThreeWithUseEffectContainer from './hookComponent/HookCounterThreeWithUseEffectContainer'

// useEffect with incorrect dependency
import IntervalClassCounter from './component/IntervalClassCounter'
import IntervalHookCounter from './hookComponent/IntervalHookCounter'

// Fetching data with useEffect
import PostListHook from './hookComponent/PostListHook'
import PostHook from './hookComponent/PostHook'

// useContext Hook
import HookComponentP from './hookComponent/HookComponentP'

// useReducer (simple state & action)
import HookCounterOneWithUseReducer from './hookComponent/HookCounterOneWithUseReducer'

// useReducer (complex state & action)
import HookCounterTwoWithUseReducer from './hookComponent/HookCounterTwoWithUseReducer'

// useReducer - Multiple useReducers
import HookCounterThreeWithUseReducer from './hookComponent/HookCounterThreeWithUseReducer'

// useReducer with useContext
import HookCounterFourWithUseReducerWithuseContext from './hookComponent/HookCounterFourWithUseReducerWithuseContext'

// Fetching data with useReducer Part 1
import DataFetchingOne from './hookComponent/DataFetchingOne'
import DataFetchingTwo from './hookComponent/DataFetchingTwo';

function App() {
  return (
    <div className="App">

        <div className="componentName"><h1>App Component</h1></div>
          <h1>HELLO WORLD</h1>
        <hr/>

        <Greet></Greet>
        <hr/>

        <Greet2></Greet2>
        <hr/>

        <Welcome></Welcome>
        <hr/>
        
        <Hello></Hello>
        <hr/>

        <GreetWithProps name="Raj" heroName="SpiderMan">
          <p>This is a child node for GreetWithProps</p>
        </GreetWithProps>
        <GreetWithProps name="Rajeev" heroName="BatMan">
          <button>Take some action</button>
        </GreetWithProps>
        <GreetWithProps name="Deep" heroName="SuperMan">
          <input type="text" placeholder="who is your SuperHero?" />
        </GreetWithProps>

        <hr/>
        <WelcomeWithProps name="Amin" heroName="Batman">
          <p>This is a child node for WelcomeWithProps</p>
        </WelcomeWithProps>

        <WelcomeWithProps name="Amit" heroName="IronMan">
        <button>Take some action</button>
        </WelcomeWithProps>

        <WelcomeWithProps name="Rahul" heroName="Thar">
          <input type="text" placeholder="who is your SuperHero?" />
        </WelcomeWithProps>
        <hr/>

        <MessageWithState></MessageWithState>
        <hr/>

        <Counter></Counter>
        <hr/>

        <FunctionClick></FunctionClick>
        <hr/>
        
        <ClassClick></ClassClick>
        <hr/>

        <EventBind></EventBind>
        <hr/>

        <ParentComponent></ParentComponent>
        <hr/>

        <ConditionalRendering></ConditionalRendering>
        <hr/>

        <NameList></NameList>
        <hr/>

        <PersonList></PersonList>
        <hr/>

        <Stylesheet primary={true}></Stylesheet>
        <hr/>

        <InlineCSS></InlineCSS>
        <hr/>

        <CSSModule></CSSModule>
        <hr/>

        <Form></Form>
        <hr/>


        <LifecycleA></LifecycleA>
        <hr/>

        <Fragment></Fragment>
        <Table></Table>
        <hr/>


        <TestPureComp></TestPureComp>
        <hr/>

        <TestMemoComponent></TestMemoComponent>
        <hr/>

        <RefsComponent></RefsComponent>
        <hr />

        <FocusInput></FocusInput>
        <hr />

        <ForwardRefParentInput></ForwardRefParentInput>
        <hr />
        
        <TestPortal></TestPortal>
        <hr />

        <ErrorBoundary>
          <Hero heroName='SpiderMan'></Hero>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName='BatMan'></Hero>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Hero heroName='Joker'></Hero>
        </ErrorBoundary>
        <hr/>

        <ClickCounter clickOwner='Newton'></ClickCounter>
        <HoverCounter hoveredBy='Einstein'></HoverCounter>
        <hr />

        <ProductList shopOwner='Vogue Fashion Store'></ProductList>

        <RenderPropsCounter increamentWith={100} render={(count, handleIncreamentCount) => (
            <ClickCounterTwo count={count} handleIncreamentCount={handleIncreamentCount}></ClickCounterTwo>
          )}
        ></RenderPropsCounter>

        <RenderPropsCounter increamentWith={20} render={(count, handleIncreamentCount)=> (
            <HoverCounterTwo count={count} handleIncreamentCount={handleIncreamentCount}></HoverCounterTwo>
          )}
        ></RenderPropsCounter>
        <hr />
        
        <RenderPropsCounter2 increamentWith={100} >
          {(count, handleIncreamentCount) => (
            <ClickCounterTwo count={count} handleIncreamentCount={handleIncreamentCount}></ClickCounterTwo>
          )}
        </RenderPropsCounter2>

        <RenderPropsCounter2 increamentWith={20} >
          {(count, handleIncreamentCount) => (
            <HoverCounterTwo count={count} handleIncreamentCount={handleIncreamentCount}></HoverCounterTwo>
          )}
        </RenderPropsCounter2>

        <ComponentC></ComponentC>

        <UserProvider value="iamrajthomas">
          <ComponentC></ComponentC>
        </UserProvider>


        {/* npm install axios */}
        <PostProvider value='https://jsonplaceholder.typicode.com/posts'>
          <PostList></PostList>
        </PostProvider>
        <hr />
        

        <PostForm></PostForm>
        <hr />

        <HookCounter></HookCounter>
        <hr />

        <HookCounterTwo></HookCounterTwo>
        <hr />
        
        
        <HookCounterThree></HookCounterThree>
        
        <HookCounterFour></HookCounterFour>

        <HookCounterOneWithUseEffect></HookCounterOneWithUseEffect>
        <hr />
        
        <HookCounterTwoWithUseEffect></HookCounterTwoWithUseEffect>
        <hr />
        
        <HookCounterThreeWithUseEffect></HookCounterThreeWithUseEffect>
        <hr />
        
        <HookCounterThreeWithUseEffectContainer></HookCounterThreeWithUseEffectContainer>
        <hr />

        <IntervalClassCounter></IntervalClassCounter>
        <hr />

        <IntervalHookCounter></IntervalHookCounter>
        <hr />

        <HookComponentP></HookComponentP>
        <hr />

        <PostListHook></PostListHook>
        <hr />

        <PostHook></PostHook>
        <hr />

        <HookCounterOneWithUseReducer></HookCounterOneWithUseReducer>
        <hr />

        <HookCounterTwoWithUseReducer></HookCounterTwoWithUseReducer>
        <hr />

        <HookCounterThreeWithUseReducer></HookCounterThreeWithUseReducer>
        <hr />

        <HookCounterFourWithUseReducerWithuseContext></HookCounterFourWithUseReducerWithuseContext>
        <hr />

        <DataFetchingOne></DataFetchingOne>
        <hr />

        <DataFetchingTwo></DataFetchingTwo>
        <hr />

        <div className="">
          <h1> This is the END</h1>
          <p>© 2022 | <a href="https://github.com/iamrajthomas">iamrajthomas</a> | All Rights Reserved.</p>
        </div>
        <hr/>
        
    </div>
  );
}

export default App;



// import logo from './logo.svg';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World
//         </p>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
