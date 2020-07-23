(this["webpackJsonpwho-wants-to-be-a-web-developer"]=this["webpackJsonpwho-wants-to-be-a-web-developer"]||[]).push([[0],{106:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(16),c=n.n(s),l=(n(58),n(59),n(4)),u=n(10),i=n(18),o=n(19),m=n(12),p=n(22),d=n(21),w=n(13),f=n(5),h=n.n(f),E=n(39),b=n.n(E),y=n(40),g=n.n(y),N=(n(66),function(e){var t=e.isMuted,n=e.handleSound;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:t?g.a:b.a,onClick:n,alt:"mute/unmute icon",className:"sound"}))}),S=Object(l.b)((function(e){return{isMuted:e.isMuted}}),(function(e){return{handleSound:function(){return e({type:"SET_SOUND"})}}}))(N),A=n(41),C=n.n(A),v=n(20),O=n.n(v),D=(n(29),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={playerName:""},a.handleStart=a.handleStart.bind(Object(m.a)(a)),a.handlePlayerName=a.handlePlayerName.bind(Object(m.a)(a)),a}return Object(o.a)(n,[{key:"handlePlayerName",value:function(e){this.setState({playerName:e.currentTarget.value})}},{key:"handleStart",value:function(){this.props.handleStart(Object(u.a)({},this.state))}},{key:"render",value:function(){return r.a.createElement("div",{className:"landing-bg"},r.a.createElement(S,null),r.a.createElement("img",{src:O.a,alt:"logo",className:"logo"}),r.a.createElement("form",{className:"landing-form"},r.a.createElement("label",{className:"label",htmlFor:"name",style:{color:"white"}},"Enter Name"),r.a.createElement("input",{className:"input",type:"text",value:this.state.playerName,onChange:this.handlePlayerName,id:"name"})),r.a.createElement(w.b,{to:"/game",className:"landing-link"},r.a.createElement("button",{className:"landing-btn",onClick:this.handleStart,disabled:""===this.state.playerName},"Start Game")),this.props.isMuted?null:r.a.createElement(h.a,{url:C.a,playStatus:h.a.status.PLAYING,autoLoad:!0,loop:!0}))}}]),n}(a.Component)),j=n(42),Q=n.n(j).a.create({baseURL:"http://ec2-18-130-184-16.eu-west-2.compute.amazonaws.com/api",headers:{Accept:"application/json"}}),k=function(){return function(e,t){var n=t().currentDifficulty+1;Q.get("questions/".concat(n)).then((function(t){var n=t.data;e(function(e){return{type:"UPDATE_QUESTION",currentQuestion:{content:e[0].content,amount:e[0].amount,answerA:{answer:e[0].answers[0].answer,correct:e[0].answers[0].correct},answerB:{answer:e[0].answers[1].answer,correct:e[0].answers[1].correct},answerC:{answer:e[0].answers[2].answer,correct:e[0].answers[2].correct},answerD:{answer:e[0].answers[3].answer,correct:e[0].answers[3].correct}}}}(n.data))}))}},T=Object(l.b)((function(e){return{isMuted:e.isMuted}}),(function(e){return{handleStart:function(t){return e(function(e){return function(t,n){var a=n().currentDifficulty;Q.get("questions/".concat(a)).then((function(n){var a=n.data;t(function(e,t){return{type:"START_GAME",playerName:t.playerName,currentQuestion:{content:e[0].content,amount:e[0].amount,answerA:{answer:e[0].answers[0].answer,correct:e[0].answers[0].correct},answerB:{answer:e[0].answers[1].answer,correct:e[0].answers[1].correct},answerC:{answer:e[0].answers[2].answer,correct:e[0].answers[2].correct},answerD:{answer:e[0].answers[3].answer,correct:e[0].answers[3].correct}}}}(a.data,e))}))}}(t))}}}))(D),M=function(e){var t=e.currentDifficulty,n=e.currentAmount;return r.a.createElement("p",null,"Host: Question number ",t," for \xa3",n)},F=Object(l.b)((function(e){return{currentDifficulty:e.currentDifficulty,currentAmount:e.currentQuestion.amount}}),null)(M),P=function(e){var t=e.text,n=e.click,a=e.color,s=e.btnStyle;return r.a.createElement("button",{className:s,onClick:n,style:{backgroundColor:a}},t)},L=function(e){var t=e.selected,n=e.handleFinalAnswer,a=e.playerName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Host: Answer ",1===t?"A":2===t?"B":3===t?"C":"D",", is that your final answer ",a,"?"),r.a.createElement(P,{text:"Final Answer",color:"#ffc107",click:n,btnStyle:"button"}))},x=Object(l.b)((function(e){return{playerName:e.playerName}}),null)(L),B=function(e){var t=e.handleReset,n=e.btnStyle;return r.a.createElement(w.b,{to:"/"},r.a.createElement(P,{click:t,text:"Start Over",color:"#dc3545",btnStyle:n}))},_=Object(l.b)(null,(function(e){return{handleReset:function(){return e({type:"RESET_GAME"})}}}))(B),I=(n(85),function(){return r.a.createElement("div",{className:"pyro"},r.a.createElement("div",{className:"before"}),r.a.createElement("div",{className:"after"}))}),G=n(43),q=n.n(G),U=function(e){var t=e.statistics,n=e.playerName,a=e.isMuted;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Congratulations ",n,"!",r.a.createElement("br",null),"You are a Web Developer!"),r.a.createElement("p",null,"Well done! Only ",100-t,"% of players have won the game!"),r.a.createElement(_,{btnStyle:"winning-button"}),r.a.createElement(I,null),a?null:r.a.createElement(h.a,{url:q.a,playStatus:h.a.status.PLAYING,autoLoad:!0}))},Y=Object(l.b)((function(e){return{playerName:e.playerName,statistics:e.statistics,isMuted:e.isMuted}}),null)(U),R=function(e){var t=e.handleSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"You are correct!"),r.a.createElement(P,{text:"Next Question",color:"#28a745",click:t,btnStyle:"button"}))},W=function(e){var t=e.playerName,n=e.correctAnswer,a=e.statistics,s=e.currentDifficulty;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Bad luck ",t,", you're wrong! The right answer is ",n),1!==s?r.a.createElement("p",null,"Well done though, you did better than ",a,"% of the people who played before!"):null,r.a.createElement(_,{btnStyle:"winning-button"}))},H=Object(l.b)((function(e){return{playerName:e.playerName,statistics:e.statistics,currentDifficulty:e.currentDifficulty}}),null)(W),J=n(44),X=n.n(J),z=(n(105),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement(X.a,{type:"TailSpin",color:"#FFF",height:100,width:100}))}),V=function(e){var t=e.correct,n=e.handleSubmit,a=e.correctAnswer,s=e.currentDifficulty,c=e.selected,l=e.handleFinalAnswer,u=e.gameOverLoaded;return r.a.createElement("div",{className:t&&15===s||!0===u?"win-wrapper":"alert-wrapper"},r.a.createElement("div",{className:t&&15===s||!0===u?"win-container":"alert-container"},u&&15===s?r.a.createElement(Y,null):u?r.a.createElement(H,{correctAnswer:a}):c?c&&null===t?r.a.createElement(x,{selected:c,handleFinalAnswer:l}):t&&15===s?u?r.a.createElement(Y,null):r.a.createElement(z,null):t?r.a.createElement(R,{handleSubmit:n}):u?r.a.createElement(H,{correctAnswer:a}):r.a.createElement(z,null):r.a.createElement(F,null)))},K=Object(l.b)((function(e){return{currentDifficulty:e.currentDifficulty,gameOverLoaded:e.gameOverLoaded}}),(function(e){return{handleSubmit:function(){return e(k())}}}))(V),Z=n(45),$=n.n(Z),ee=n(46),te=n.n(ee),ne=n(47),ae=n.n(ne),re=n(48),se=n.n(re),ce=n(49),le=n.n(ce),ue=n(50),ie=n.n(ue),oe=(n(106),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={playerName:e.playerName,question:e.currentQuestion.content,answerA:e.currentQuestion.answerA.answer,isCorrectA:e.currentQuestion.answerA.correct,answerB:e.currentQuestion.answerB.answer,isCorrectB:e.currentQuestion.answerB.correct,answerC:e.currentQuestion.answerC.answer,isCorrectC:e.currentQuestion.answerC.correct,answerD:e.currentQuestion.answerD.answer,isCorrectD:e.currentQuestion.answerD.correct,selected:0,sound:0,answerCorrect:null,currentDifficulty:e.currentDifficulty},a.handleAnswerClick=a.handleAnswerClick.bind(Object(m.a)(a)),a.handleSoundFinishedPlaying=a.handleSoundFinishedPlaying.bind(Object(m.a)(a)),a.handleFinalAnswer=a.handleFinalAnswer.bind(Object(m.a)(a)),a}return Object(o.a)(n,[{key:"handleAnswerClick",value:function(e){this.setState({selected:e})}},{key:"handleSoundFinishedPlaying",value:function(){this.setState({sound:1})}},{key:"handleFinalAnswer",value:function(){var e=this,t=this.state,n=t.selected,a=t.isCorrectA,r=t.isCorrectB,s=t.isCorrectC,c=t.isCorrectD,l=t.currentDifficulty;this.setState({sound:2}),setTimeout((function(){1===n&&1===a||2===n&&1===r||3===n&&1===s||4===n&&1===c?(e.setState({answerCorrect:!0,sound:3}),15===l&&e.props.handlePostGame()):(e.setState({answerCorrect:!1,sound:4}),e.props.handlePostGame())}),this.props.isMuted?0:3500)}},{key:"componentDidUpdate",value:function(e){e.currentQuestion.content!==this.props.currentQuestion.content&&this.setState({playerName:this.props.playerName,question:this.props.currentQuestion.content,answerA:this.props.currentQuestion.answerA.answer,isCorrectA:this.props.currentQuestion.answerA.correct,answerB:this.props.currentQuestion.answerB.answer,isCorrectB:this.props.currentQuestion.answerB.correct,answerC:this.props.currentQuestion.answerC.answer,isCorrectC:this.props.currentQuestion.answerC.correct,answerD:this.props.currentQuestion.answerD.answer,isCorrectD:this.props.currentQuestion.answerD.correct,selected:0,sound:1===this.props.currentDifficulty?0:1,answerCorrect:null,currentDifficulty:this.props.currentDifficulty})}},{key:"render",value:function(){var e=this,t=this.state,n=t.answerA,a=t.answerB,s=t.answerC,c=t.answerD,l=t.selected,u=t.isCorrectA,i=t.isCorrectB,o=t.isCorrectC,m=t.isCorrectD,p=t.question,d=t.sound,w=t.currentDifficulty,f="";u&&(f=n),i&&(f=a),o&&(f=s),m&&(f=c);var E=n.length>25||a.length>25||s.length>25||c.length>25,b=n.length>18||a.length>18||s.length>18||c.length>18,y=p.length>60,g=p.length>30;return r.a.createElement("div",{className:"question-bg"},r.a.createElement(S,null),this.props.isMuted||0!==d?null:r.a.createElement(h.a,{url:$.a,playStatus:h.a.status.PLAYING,autoLoad:!0,onFinishedPlaying:this.handleSoundFinishedPlaying}),this.props.isMuted||1!==d?null:r.a.createElement(h.a,{url:w<6?te.a:ae.a,playStatus:h.a.status.PLAYING,autoLoad:!0,loop:!0}),this.props.isMuted||2!==d?null:r.a.createElement(h.a,{url:se.a,playStatus:h.a.status.PLAYING,autoLoad:!0}),this.props.isMuted||3!==d?null:r.a.createElement(h.a,{url:le.a,playStatus:h.a.status.PLAYING,autoLoad:!0}),this.props.isMuted||4!==d?null:r.a.createElement(h.a,{url:ie.a,playStatus:h.a.status.PLAYING,autoLoad:!0}),r.a.createElement(K,{selected:l,handleFinalAnswer:this.handleFinalAnswer,correct:this.state.answerCorrect,correctAnswer:f}),r.a.createElement("div",{className:"question-answers"},r.a.createElement("span",{className:"question"},r.a.createElement("h2",{className:y?"long-questions":g?"long-questions-mobile":""},p)),r.a.createElement("span",{className:"answer-a",onClick:function(){return e.handleAnswerClick(1)}},r.a.createElement("h4",{className:"answers"+(E?" long-answers":b?" long-answers-mobile":""),style:{color:1===l?"rgb(224, 215, 78)":"white"}},r.a.createElement("span",{className:"bullet-point"},r.a.createElement("span",null,"\u2666 "),"A:"),r.a.createElement("span",null,n))),r.a.createElement("span",{className:"answer-b",onClick:function(){return e.handleAnswerClick(2)}},r.a.createElement("h4",{className:"answers"+(E?" long-answers":b?" long-answers-mobile":""),style:{color:2===l?"rgb(224, 215, 78)":"white"}},r.a.createElement("span",{className:"bullet-point"},r.a.createElement("span",null,"\u2666 "),"B:"),r.a.createElement("span",null,a))),r.a.createElement("span",{className:"answer-c",onClick:function(){return e.handleAnswerClick(3)}},r.a.createElement("h4",{className:"answers"+(E?" long-answers":b?" long-answers-mobile":""),style:{color:3===l?"rgb(224, 215, 78)":"white"}},r.a.createElement("span",{className:"bullet-point"},r.a.createElement("span",null,"\u2666 "),"C:"),r.a.createElement("span",null,s))),r.a.createElement("span",{className:"answer-d",onClick:function(){return e.handleAnswerClick(4)}},r.a.createElement("h4",{className:"answers"+(E?" long-answers":b?" long-answers-mobile":""),style:{color:4===l?"rgb(224, 215, 78)":"white"}},r.a.createElement("span",{className:"bullet-point"},r.a.createElement("span",null,"\u2666 "),"D:"),r.a.createElement("span",null,c)))))}}]),n}(a.Component)),me=Object(l.b)((function(e){return{playerName:e.playerName,currentQuestion:e.currentQuestion,currentDifficulty:e.currentDifficulty,isMuted:e.isMuted}}),(function(e){return{handleLoad:function(){return e(k())},handlePostGame:function(){return e((function(e,t){var n=t().currentDifficulty;Q.post("games/statistics",{score:n}).then((function(){Q.get("games/statistics").then((function(t){var n=t.data;e(function(e){return{type:"SET_STATISTICS",data:e}}(n))}))}))}))}}}))(oe),pe=function(){return r.a.createElement("div",{className:"landing-bg"},r.a.createElement("img",{src:O.a,alt:"logo",className:"logo"}),r.a.createElement("h2",{style:{color:"white"}},"Oops! It appears you navigated to a non existing page!"),r.a.createElement(_,{btnStyle:"winning-button"}))},de=n(3);var we=function(){return r.a.createElement(w.a,null,r.a.createElement(de.c,null,r.a.createElement(de.a,{exact:!0,path:"/"},r.a.createElement(T,null)),r.a.createElement(de.a,{exact:!0,path:"/game"},r.a.createElement(me,null)),r.a.createElement(pe,null)))},fe=n(14),he=n(51),Ee=n(52),be=n.n(Ee),ye={playerName:"",currentDifficulty:1,isMuted:!0,statistics:null,gameOverLoaded:!1,currentQuestion:{content:"",amount:"",answerA:{answer:"",correct:null},answerB:{answer:"",correct:null},answerC:{answer:"",correct:null},answerD:{answer:"",correct:null}}},ge=function(e,t){switch(t.type){case"START_GAME":return function(e,t){return Object(u.a)(Object(u.a)({},e),{},{playerName:t.playerName,currentQuestion:t.currentQuestion})}(e,t);case"SET_SOUND":return function(e){return Object(u.a)(Object(u.a)({},e),{},{isMuted:!e.isMuted})}(e);case"UPDATE_QUESTION":return function(e,t){return Object(u.a)(Object(u.a)({},e),{},{currentQuestion:t.currentQuestion,currentDifficulty:e.currentDifficulty+1})}(e,t);case"SET_STATISTICS":return function(e,t){return Object(u.a)(Object(u.a)({},e),{},{statistics:t.data,gameOverLoaded:!0})}(e,t);case"RESET_GAME":return function(e){return Object(u.a)(Object(u.a)({},ye),{},{isMuted:e.isMuted})}(e);default:return e}},Ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fe.c,Se=Object(fe.d)(ge,ye,Ne(Object(fe.a)(he.a),be()()));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:Se},r.a.createElement(we,null))),document.getElementById("root"))},20:function(e,t,n){e.exports=n.p+"static/media/logoTransparent.0b801b30.png"},29:function(e,t,n){},39:function(e,t,n){e.exports=n.p+"static/media/audio.37e32b6e.svg"},40:function(e,t,n){e.exports=n.p+"static/media/mute.e04237f5.svg"},41:function(e,t,n){e.exports=n.p+"static/media/openingTheme.61c1eb5e.mp3"},43:function(e,t,n){e.exports=n.p+"static/media/crowdapplause.fc981ab7.mp3"},45:function(e,t,n){e.exports=n.p+"static/media/letsPlay.3d8ba0a6.mp3"},46:function(e,t,n){e.exports=n.p+"static/media/upTo1000music.d9cb525d.mp3"},47:function(e,t,n){e.exports=n.p+"static/media/upTo32000music.78fa5376.mp3"},48:function(e,t,n){e.exports=n.p+"static/media/finalAnswer.b0092313.mp3"},49:function(e,t,n){e.exports=n.p+"static/media/correctAnswer.d27f45ad.mp3"},50:function(e,t,n){e.exports=n.p+"static/media/wrongAnswer.e55862ad.mp3"},53:function(e,t,n){e.exports=n(111)},58:function(e,t,n){},59:function(e,t,n){},66:function(e,t,n){},85:function(e,t,n){}},[[53,1,2]]]);
//# sourceMappingURL=main.5ab11de2.chunk.js.map