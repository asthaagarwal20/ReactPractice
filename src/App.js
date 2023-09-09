import logo from './logo.svg';
import Greet from './concepts/components/functionalComp/funCompEg';
import GreetProps from './concepts/props/propEg1';
import Welcome from './concepts/components/classComponents/classCompEg';
import WelcomeProps from './concepts/props/propsEg2';
import WelcomeState from './concepts/state/stateEg1';
import Welcome2 from './concepts/components/classComponents/classCompeg2';
import Greet2 from './concepts/components/functionalComp/funcCompEg2';
import WelcomeSetState from './concepts/state/stateEg2';
import './App.css';
import GreetSetState from './concepts/state/SateFuncEg';
import FunctionClick from './concepts/EventHandling/FunctionalClick';
import ClassClick from './concepts/EventHandling/ClassClick';
import EventBind from './concepts/BindingEventHandler/EventBind';
import Hello from './concepts/JSX/Hello';
import Counter from './concepts/setState/counter';
import ClassCounter from './concepts/hooks/statehooks';
import HooksCounter from './concepts/hooks/hooksCounter';
import HookCounterPrev from './concepts/hooks/HookCounterPrev';
import HookCounterObject from './concepts/hooks/HookCounterObject';
import EventBind1 from './concepts/BindingEventHandler/BindingEventHandler2';
import Example from './concepts/hooks/Hookseg';
import Props from './concepts/props/Prop';
import GreetUser from './concepts/setState/SetEg';
import ConditionalRenderingEg from './concepts/conditionalRendering/conditionalRenderingEgifelse';
import ConditionalRenderingEg2 from './concepts/conditionalRendering/conditionalRenderingWithElementVariables';
import ConditionalRenderingEg3 from './concepts/conditionalRendering/TernaryOperator';
import ListRenderingEg from './concepts/ListRendering/ListRenderingEg';
import ListRenderingEgKey from './concepts/ListRenderingKeys/ListRenderingKeys';
import NameList from './concepts/IndexAsKey/NameList';
import List from './concepts/ListRendering/list';
import CounterArray from './concepts/usestateWithArray/usestateArray';
import Count from './concepts/useEffect/useeffect';
import ConditionalCount from './concepts/conditionallyRunEffects/ConditionalCounter';
import ParentTwo from './concepts/methodAsProps/ParentTwo';
import Parent from './concepts/methodAsProps/parent';
import React from 'react';
import MountingLifecycle from './concepts/LifecycleMethods/MountingLifecycle';
import LifecycleC from './concepts/LifecycleMethods/updateLifecycle';
import ClickCounter from './concepts/HigherOrderComponents/ClickCounter';
import HoverCounter from './concepts/HigherOrderComponents/HoverCounter';
import ClickCounterTwo from './concepts/RenderProps/ClickCounterTwo';
import HoverCounterTwo from './concepts/RenderProps/HoverCounterTwo';
import Scoreboard from './concepts/useEffect/ScoreBoard';
import PlayerTable from './concepts/useEffect/Player';


function App() {
  const [obj,setObj] = React.useState({})

const listenToParent = (obj) => {
  setObj(obj)
}
  
  return (
    <div className="App">
      {/* <Scoreboard />
      <PlayerTable />
      <ClickCounterTwo />
      <HoverCounterTwo />
      <ClickCounter name='Astha'/>
      <HoverCounter />
      <LifecycleC />
      <MountingLifecycle />
      <Parent listen={listenToParent}/>
      <ParentTwo object={obj}/> */}
      <Count />
      {/* <ConditionalCount />
      <CounterArray /> */}
      {/* <List />
      <NameList />
      <ListRenderingEgKey />
      <ListRenderingEg />
      <ConditionalRenderingEg />
      <ConditionalRenderingEg2 />
      <ConditionalRenderingEg3 />
      <GreetProps name="Astha"/>
      <Greet />
      <Greet2 />
      <GreetSetState />
      <Welcome/>
      <Welcome2 />
      <WelcomeProps name="Astha"/>
      <WelcomeState />
      <WelcomeSetState />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <Hello />
      <Counter />
      <ClassCounter />
      <HooksCounter />
      <HookCounterPrev />
      <HookCounterObject />
      <EventBind1 /> */}
      {/* <Example /> */}
      <Props name="Astha" age="10"/>
      <GreetUser name="Astha"/>
    </div>
  );
}

export default App;
