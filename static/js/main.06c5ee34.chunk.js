(this.webpackJsonpwebpage=this.webpackJsonpwebpage||[]).push([[0],[,,,,,,,function(A,e,t){},,,,,,,,,,,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){},,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},,,,,,,,,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){"use strict";t.r(e);var c=t(1),a=t.n(c),s=t(5),n=t.n(s),i=(t(21),t(22),t(23),t.p+"static/media/location.642f054d.svg"),g=t.p+"static/media/mail.2c9fdd96.svg",H=t.p+"static/media/telephone.98d34d26.svg",o=t(0);var l=function(){return Object(o.jsx)("div",{className:"Header",children:Object(o.jsxs)("div",{className:"header-wrapper",children:[Object(o.jsx)("div",{className:"name",children:"Keon Choi"}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("img",{alt:"location",className:"header-icon",src:i}),Object(o.jsx)("div",{className:"info-text",children:"New York, NY"}),Object(o.jsx)("img",{alt:"email",className:"header-icon",src:g}),Object(o.jsx)("div",{className:"info-text",children:"keonch91@gmail.com"}),Object(o.jsx)("img",{alt:"phone",className:"header-icon",src:H}),Object(o.jsx)("div",{className:"info-text",children:"646-520-7420"})]})]})})};t(25),t(26);var C=function(A){return Object(o.jsxs)("div",{className:"Section",children:[Object(o.jsx)("div",{className:"title",children:A.title}),A.content]})},r=(t(27),t.p+"static/media/me.aae17878.png"),d=t.p+"static/media/keon_choi_resume.fdec3459.pdf";var B=function(){return Object(o.jsxs)("div",{className:"AboutMe",children:[Object(o.jsx)("img",{className:"me",src:r,alt:"me"}),Object(o.jsx)("div",{className:"summary",children:"I am a full stack software engineer experienced in JavaScript and Python"}),Object(o.jsx)("a",{className:"resume-link",target:"_blank",rel:"noopener noreferrer",href:d,children:"See Resume"})]})},Q=t(14),p=t(12),b=t(13),w=t(2),D=t(16),j=t(15);t(28),t(7),t(29);var f=function(A){return Object(o.jsx)("div",{className:"Project",onClick:function(){return A.openModal(A.id)},children:Object(o.jsx)("div",{className:"project-img",style:{backgroundImage:"url(".concat(A.img,")")},children:Object(o.jsx)("span",{className:"project-title",children:A.title})})})};var I=function(A){var e=A.project_details||{},t=e.technologies&&e.technologies.map((function(A){return Object(o.jsx)("div",{className:"project-details-tech",children:A},A)}));return Object(o.jsxs)("div",{className:"ProjectDetails",children:[Object(o.jsx)("div",{className:"modal-close",onClick:A.closeModal,children:"X"}),Object(o.jsx)("div",{className:"project-details-title",children:e.title}),Object(o.jsxs)("div",{className:"project-details-sidebar",children:[Object(o.jsxs)("div",{className:"project-details-technologies",children:[Object(o.jsx)("div",{className:"project-details-technologies-subtitle",children:"Technologies Used"}),t]}),Object(o.jsx)("a",{className:"project-details-link",target:"_blank",rel:"noopener noreferrer",href:e.link,children:"See Live"})]}),Object(o.jsx)("div",{className:"project-details-description",children:e.description}),Object(o.jsx)("img",{className:"project-details-gif",src:e.gif,alt:e.id})]})},m=t(6),u=t.n(m),k=t.p+"static/media/wheresmytrain.343c4c09.gif",P=t.p+"static/media/nobasecase.e226c6b3.gif",O=t.p+"static/media/calendar.8b6098bb.gif",v={wheresmytrain:{id:"wheresmytrain",description:"Where's My Train is a Javascript application that utilizes Google Maps API and MTA datamine to render subway trains at realtime. It incorporates CORS proxy server to fetch serialized data from the MTA. The data is then decoded into JavaScript objects using Google's GTFS protocol buffer and centralized into a single source. That single source coordinates every aspect of the map display including stations, paths and velocities of trains, giving users a visualization of the NYC subway system.",title:"Where's My Train",technologies:["JavaScript","Google Maps","Protobuf.js","GTFS data","CORS proxy"],img:t.p+"static/media/wheresmytrain.5a810a84.jpg",gif:k,link:"https://keonch.me/wheres_my_train/"},nobasecase:{id:"nobasecase",description:"No Basecase is a full stack web application that replicates Stack Overflow - a Q&A website that covers topics in computer programming. It is built with React-Redux frontend and Ruby on Rails with PostgreSQL database backend. It features CRUD functionality on questions and answers and allows users to input code blocks using React-Quill editor. The app also implements users' voting feature by utilizing ActiveRecord's polymorphic association for DRYer and more modular code.",title:"No Basecase",technologies:["React","Redux","Heroku","PostgreSQL","Ruby on Rails","Webpack"],img:t.p+"static/media/nobasecase.9f2db37f.jpg",gif:P,link:"http://nobasecase.herokuapp.com/#/"},calendar:{id:"calendar",description:"A simple Calendar application for users to input events onto day boxes. Multiple events can be scheduled throughout the day and are ordered based on the time of the event.",title:"Calendar",technologies:["React","Redux","Heroku","PostgreSQL","Ruby on Rails","Webpack"],img:t.p+"static/media/calendar.d2049ac3.jpg",gif:O,link:"https://calendar-kc.herokuapp.com/"}};u.a.setAppElement("#root");var N=function(A){Object(D.a)(t,A);var e=Object(j.a)(t);function t(A){var c;return Object(p.a)(this,t),(c=e.call(this)).state={showModal:!1,current_project:null},c.handleOpenModal=c.handleOpenModal.bind(Object(w.a)(c)),c.handleCloseModal=c.handleCloseModal.bind(Object(w.a)(c)),c}return Object(b.a)(t,[{key:"handleOpenModal",value:function(A){this.setState({showModal:!0,current_project:A})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1,current_project:null})}},{key:"render",value:function(){var A=this,e=Object.entries(v).map((function(e){var t=Object(Q.a)(e,2),c=t[0],a=t[1];return Object(o.jsx)(f,{img:a.img,title:a.title,id:c,openModal:A.handleOpenModal},c)}));return Object(o.jsxs)("div",{className:"Projects",children:[e,Object(o.jsx)(u.a,{className:"Modal",overlayClassName:"Overlay",isOpen:this.state.showModal,shouldCloseOnOverlayClick:!0,onRequestClose:this.handleCloseModal,children:Object(o.jsx)(I,{project_key:this.state.current_project,closeModal:this.handleCloseModal,project_details:v[this.state.current_project]})})]})}}]),t}(a.a.Component);t(41),t(42);var M=function(A){return Object(o.jsxs)("div",{className:"Skill",children:[Object(o.jsx)("img",{className:"icon",src:A.img,alt:A.caption}),Object(o.jsx)("div",{className:"caption",children:A.caption})]})},h=t.p+"static/media/css3.c65b6eb4.png",E=t.p+"static/media/js.6b108058.png",y=t.p+"static/media/postgresql.e2082c17.png",S=t.p+"static/media/protobuf.e4450bfb.png",K=t.p+"static/media/python.b6040aca.png",x=t.p+"static/media/rails.7e9ce12c.png",U=t.p+"static/media/react.e310fdba.png",J=t.p+"static/media/redux.296b9306.png",T=t.p+"static/media/ruby.67bc5fac.svg",G=t.p+"static/media/webpack.4d4ac489.png",L=t.p+"static/media/git.140fa4d6.png";var z=function(){return Object(o.jsxs)("div",{className:"Skills",children:[Object(o.jsx)(M,{img:K,caption:"Python3",className:"Skill"}),Object(o.jsx)(M,{img:E,caption:"JavaScript",className:"Skill"}),Object(o.jsx)(M,{img:U,caption:"React",className:"Skill"}),Object(o.jsx)(M,{img:J,caption:"Redux",className:"Skill"}),Object(o.jsx)(M,{img:T,caption:"Ruby",className:"Skill"}),Object(o.jsx)(M,{img:x,caption:"Ruby on Rails",className:"Skill"}),Object(o.jsx)(M,{img:y,caption:"PostgreSQL",className:"Skill"}),Object(o.jsx)(M,{img:G,caption:"Webpack",className:"Skill"}),Object(o.jsx)(M,{img:"data:image/png;base64,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dtZ1A7DYEwBTEAAUtee+fY+4sn/w9w56ZtuhQ4dLTxiooaG6fgASMycAGAgHPUCzCABm1UMH/bYd2X67gx6gqQQAx+QxD/ptO7LnPgc9QBsIACbloAfoJgHApH77XZ8qPQGAOVDPj8YCAB4iAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAJjUa0YuycJF80vPAGCWCQAmddFznpi3veeKrFs/XHoKALNIADCldeuH87b3XJGnPfeJpacAMEsEANOycNH8vPotl3gSAOgIAcCMeBIA6AYBwIx5EgBoPwHAMfEkANBuAoDj4kkAoJ0EAMfNkwBA+wgAZoUnAYB2EQDMKk8CAO0gAJh1ngQAmk8AMCc8CQA0mwBgTnkSAGgmAcCc8yQA0DwCgIHwJADQLAKAgfIkANAMAoCB8yQAUJ4AoAhPAgBlCQCK8iQAUIYAoDhPAgCDJwBoBE8CAIMlAGgUTwIAgyEAaBxPAgBzTwDQSJ4EAOaWAKDRPAkAzA0BQON5EgCYfQKAVvAkADC7BACt4kkAYHYIAFrHkwDA8RMAtJInAYDjIwBoNU8CAMdGANB6ngQAZk4A0AmeBABmRgDQKZ4EAKZHANA5ngQApiYA6CRPAgCTEwB0micBgMcmAOg8TwIAjyYAqIInAYBHEgBUxZMAwAQBQHU8CQAIACrlSQConQCgap4EgFoJAKrnSQCokQAAgAotKD0AStu+bWc+9sf/mO3bdpaeAjAwAoCqff0r38tnPvy17H/gYOkpAAMlAKjS/gcO5m8+8rX8+5e/V3oKQBECgOq48gcQAFTGlT/ABAFAFVz5AzySAKDzXPkDPJoA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",caption:"Heroku",className:"Skill"}),Object(o.jsx)(M,{img:S,caption:"Protobuf.js",className:"Skill"}),Object(o.jsx)(M,{img:L,caption:"Git",className:"Skill"}),Object(o.jsx)(M,{img:"data:image/png;base64,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",caption:"HTML5",className:"Skill"}),Object(o.jsx)(M,{img:h,caption:"CSS3",className:"Skill"})]})};var q=function(){var A=Object(o.jsx)(B,{}),e=Object(o.jsx)(N,{}),t=Object(o.jsx)(z,{});return Object(o.jsxs)("div",{className:"Body",children:[Object(o.jsx)(C,{title:"About Me",content:A}),Object(o.jsx)("div",{className:"divider"}),Object(o.jsx)(C,{title:"Projects",content:e}),Object(o.jsx)("div",{className:"divider"}),Object(o.jsx)(C,{title:"Skills",content:t})]})},Z=(t(43),t.p+"static/media/github.f1102180.png");var R=function(){return Object(o.jsx)("div",{className:"Footer",children:Object(o.jsxs)("div",{className:"links",children:[Object(o.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/keon-choi/",children:[Object(o.jsx)("img",{className:"footer-img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABKNAAASjQEphQ1dAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAvFQTFRF////AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3dPNe8AAAAPp0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMU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",alt:"linkedin"}),Object(o.jsx)("div",{children:"LinkedIn"})]}),Object(o.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/keonch",children:[Object(o.jsx)("img",{className:"footer-img",src:Z,alt:"github"}),"GitHub"]})]})})};var V=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)(q,{}),Object(o.jsx)(R,{})]})};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(V,{})}),document.getElementById("root"))}],[[44,1,2]]]);
//# sourceMappingURL=main.06c5ee34.chunk.js.map