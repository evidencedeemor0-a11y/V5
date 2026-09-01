const state = {
  screen:"home", transferMode:"send", financialTab:"spending",
  notifications:{transactions:true,deposits:true,insights:true,promotions:false},
  transferForm:{name:"",accountNumber:"",bank:"Chase Bank",note:""},
  transferAmountDigits:"0",
  balance:81332.58,
  accounts:[
    {name:"Loop checking",bal:45230.80,mask:"...7483",icon:"white"},
    {name:"CPC checking",bal:12500.48,mask:"...7483",icon:"blue"},
    {name:"Savings",bal:8300.00,mask:"...9487",icon:"yellow"},
    {name:"Credit Builder",bal:1200.00,mask:"...4747",icon:"green"}
  ],
  transactions:[
    {name:"Gray Campbell",meta:"Jun 4 · 22:14",value:"-$2,500.00",type:"Payment",avatar:"GC"},
    {name:"Amazon.com",meta:"Jun 4 · 18:45",value:"-$89.99",type:"Purchase",avatar:"AM"},
    {name:"Starbucks",meta:"Jun 4 · 09:15",value:"-$6.75",type:"Purchase",avatar:"SB"},
    {name:"Direct deposit",meta:"Jun 3 · 08:00",value:"+$1,250.00",type:"Deposit",avatar:"↓"}
  ]
};

/* ── Clean, modern icon set ── */
const ic = {
  /* nav */
  home:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M9 21V13h6v8"/></svg>`,
  card:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="14" rx="3"/><path d="M2 11h20"/><path d="M6 16h3"/></svg>`,
  accounts:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/></svg>`,
  transfer:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14M5 8l4-4M5 8l4 4M19 16H5m14 0-4-4m4 4-4 4"/></svg>`,
  financials:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h18M7 20V10m4 10V4m4 10v6m4-6v6"/></svg>`,
  /* actions */
  bell:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9a6 6 0 0 1 12 0c0 6.5 2.5 7.5 2.5 9H3.5c0-1.5 2.5-2.5 2.5-9"/><path d="M9.5 21a2.5 2.5 0 0 0 5 0"/></svg>`,
  help:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M10 9.5a2.5 2.5 0 0 1 4.8.83c0 1.7-2.3 2.17-2.3 4.17M12 17.5v.5"/></svg>`,
  back:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18 9 12l6-6"/></svg>`,
  plus:`<svg viewBox="0 0 24 24" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  deposit:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4"/><path d="m8 12 4 4 4-4"/><path d="M4 20h16"/></svg>`,
  up:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m8 9 4-4 4 4"/><path d="M5 19h14"/></svg>`,
  down:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M7 14l5 5 5-5"/></svg>`,
  search:`<svg viewBox="0 0 24 24" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m17 17 4 4"/></svg>`,
  info:`<svg viewBox="0 0 24 24" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/></svg>`,
  shield:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 21 6.5v5c0 5.25-3.8 8.75-9 10-5.2-1.25-9-4.75-9-10v-5z"/><path d="m9 12 2 2 4-5"/></svg>`,
  user:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c1-4 4-6 8-6s7 2 8 6"/></svg>`,
  lock:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1" fill="currentColor" stroke="none"/></svg>`,
  settings:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>`,
  logout:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5H5v14h4"/><path d="m14 16 4-4-4-4"/><path d="M18 12H9"/></svg>`,
  move:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M15 8l4 4-4 4"/></svg>`,
  linked:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  request:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m16 15-4 4-4-4"/></svg>`,
  check:`<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5.5 5.5L20 6.5"/></svg>`,
};

function money(n){return "$"+n.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}
function navItem(id,label,icon){return `<button class="nav-item ${state.screen===id?'active':''}" data-nav="${id}">${ic[icon]}<span>${label}</span></button>`}
function renderNav(){
  document.querySelector("#bottom-nav").innerHTML =
    navItem("home","Home","home")+navItem("cards","Cards","card")+navItem("accounts","Accounts","accounts")+navItem("transfer","Transfer","transfer")+navItem("financials","Financials","financials");
}
function header(title,back=true){
  return `<div class="back-row">${back?`<button class="back" data-action="back">${ic.back}</button>`:""}<h1 class="screen-title">${title}</h1></div>`;
}
function accountIcon(type="white"){return `<span class="mini-icon ${type==='white'?'':type}">${ic.accounts}</span>`}
function transaction(t){
  const isNeutral=t.avatar==='AM'||t.avatar==='SB';
  return `<div class="transaction"><div class="tx-avatar ${isNeutral?'neutral':''}">${t.avatar}</div><div class="tx-info"><div class="tx-name">${t.name}</div><div class="tx-meta">${t.meta}</div></div><div class="tx-right"><div class="tx-value" style="color:${t.value.startsWith('+')?'var(--green)':'inherit'}">${t.value}</div><div class="tx-type">${t.type}</div></div></div>`;
}

function home(){
  return `<div class="screen home">
    <section class="home-green">
      <div class="home-header">
        <div class="brand">LOOP</div>
        <div class="header-actions">
          <button class="icon-btn" data-action="notifications">${ic.bell}</button>
          <button class="icon-btn" data-action="help">${ic.help}</button>
          <button class="icon-btn" data-action="profile"><span class="avatar">EA</span></button>
        </div>
      </div>
      <div class="balance-label">Total balance ${ic.info}</div>
      <div class="balance">${money(state.balance)}</div>
      <div class="pill-actions">
        <button class="pill-btn pill-deposit" data-action="deposit">${ic.deposit} Deposit</button>
        <button class="pill-btn pill-transfer" data-action="send">${ic.up} Transfer</button>
      </div>
    </section>
    <div class="home-body">
      <button class="request-card" data-action="request" style="background:#0d1010;border:1px solid #262b2a;border-radius:16px">
        <span class="request-icon">${ic.request}</span>
        <span class="request-copy">
          <span class="row-between"><span class="request-title">Fund request</span><span class="amount">$780</span></span>
          <span class="row-between"><span class="request-sub">Jun 3, 2024 · 22:14</span><span class="person">Eric Angelo</span></span>
        </span>
      </button>
      <div class="section-head"><span class="section-title">Accounts</span><button class="see" data-nav="accounts">See all</button></div>
      <div class="accounts-strip">${state.accounts.slice(0,3).map(a=>`<button class="account-mini" data-action="accountDetail"><span>${accountIcon(a.icon)}</span><div class="account-name">${a.name}</div><div class="account-bal">${money(a.bal)}</div></button>`).join("")}</div>
      <div class="section-head"><span class="section-title">Recent transactions</span><button class="see" data-nav="accounts">See all</button></div>
      ${state.transactions.slice(0,3).map(transaction).join("")}
    </div>
  </div>`;
}

function accounts(){
  return `<div class="screen">${header("Accounts",false)}<div class="list">
  ${state.accounts.map(a=>`<button class="account-card" data-action="accountDetail" style="width:100%;color:#fff;text-align:left"><div class="top">${accountIcon(a.icon)}<div><div class="name">${a.name}</div><div class="bal">${money(a.bal)}</div></div><div class="masked">${a.mask}</div></div></button>`).join("")}
  <button class="open-account" data-action="newAccount" style="background:none;border:1px solid var(--line);color:#fff;border-radius:12px;width:100%;text-align:left"><span><b style="font-size:13px">Open a new account</b><span class="setting-sub" style="display:block;margin-top:3px">Explore account options</span></span><span class="plus">${ic.plus}</span></button></div></div>`;
}

function accountDetail(){
  return `<div class="screen">${header("Loop checking")}<div class="masked" style="margin-bottom:20px;font-size:12px;color:#a2a7a5">...7483</div><div class="large-balance">$45,230.80</div><div class="available">Available balance</div>
  <div class="action-row"><button class="action-box" data-action="deposit">${ic.deposit}Add money</button><button class="action-box" data-action="move">${ic.move}Move money</button><button class="action-box" data-action="accountInfo">${ic.info}Account info</button></div>
  <div class="section-head"><span class="section-title">Recent transactions</span></div>${state.transactions.map(transaction).join("")}</div>`;
}

function transfer(){
  const req=state.transferMode==="request";
  const f=state.transferForm;
  return `<div class="screen">${header("Transfer")}
  <div class="tabs"><button class="tab ${!req?'selected':''}" data-action="sendMode">Send</button><button class="tab ${req?'selected':''}" data-action="requestMode">Request</button></div>
  <div class="form">
    ${req?`
    <div class="field"><label>Request from</label><div class="search"><span>${ic.search}</span><input class="input" placeholder="Search name, $tag, phone, email"></div></div>
    <div class="field"><label>Amount</label><input id="amountInput" class="input" inputmode="decimal" placeholder="$0.00"></div>
    <div class="field"><label>What's it for? (optional)</label><input class="input" placeholder="Dinner"></div>
    `:`
    <div class="field"><label>From</label><button class="account-card" style="width:100%;color:#fff;text-align:left"><div class="top">${accountIcon()}<div><div class="name">Loop checking</div><div class="bal">$45,230.80</div></div><div class="masked">...7483 ›</div></div></button></div>
    <div class="field"><label>Account name</label><input id="toName" class="input" placeholder="Recipient's full name" value="${f.name}"></div>
    <div class="field"><label>Account number</label><input id="toAccountNumber" class="input" inputmode="numeric" placeholder="Enter account number" value="${f.accountNumber}"></div>
    <div class="field"><label>Select bank</label><div class="select-wrap"><select id="toBank" class="input"><option ${f.bank==="Chase Bank"?"selected":""}>Chase Bank</option></select></div></div>
    <div class="field"><label>What's it for? (optional)</label><input id="toNote" class="input" placeholder="Rent, utilities…" value="${f.note}"></div>
    `}
    <button class="submit" data-action="reviewTransfer">Review ${req?'request':'transfer'}</button>
  </div></div>`;
}

function transferAmount(){
  const f=state.transferForm;
  const digits=state.transferAmountDigits||"0";
  const intFormatted=Number(digits||"0").toLocaleString("en-US");
  const last4=f.accountNumber?f.accountNumber.slice(-4):"";
  return `<div class="screen amount-screen">
    <div class="back-row" style="margin-bottom:0"><button class="back" data-action="back">${ic.back}</button></div>
    <div class="amount-body">
      <div class="amount-recipient">To ${f.name||"recipient"} · ${f.bank}${last4?` ····${last4}`:""}</div>
      <div class="amount-display">$${intFormatted}</div>
    </div>
    <div class="keypad">
      ${["1","2","3","4","5","6","7","8","9"].map(k=>`<button class="key" data-key="${k}">${k}</button>`).join("")}
      <span></span>
      <button class="key" data-key="0">0</button>
      <button class="key key-back" data-key="back">${ic.back}</button>
    </div>
    <button class="pill-send" data-action="sendAmount">Send</button>
  </div>`;
}

function cards(){
  return `<div class="screen">${header("Cards",false)}
  <div class="card-visual"><span class="card-brand">LOOP</span><span class="masked">...7483</span><span class="chip"></span><span class="visa">VISA<span class="debit">DEBIT</span></span></div>
  <button class="account-card" data-action="cardDetail" style="width:100%;color:white;text-align:left">Card details ›</button>
  <div class="setting-list" style="margin-top:10px">
    ${settingRow("Freeze card","",`<button class="switch" data-action="freeze"></button>`)}
    ${settingRow("Virtual card","Show virtual card details",`<span class="chev">›</span>`,`virtual`)}
    ${settingRow("Card limits","Set spending limits",`<span class="chev">›</span>`)}
    ${settingRow("Settings","Manage card settings",`<span class="chev">›</span>`)}
  </div></div>`;
}

function cardDetail(){
  return `<div class="screen">${header("Card details")}
  <div class="card-visual" style="height:185px"><span class="card-brand">LOOP</span><span class="masked">...7483</span><span class="chip"></span><span class="visa">VISA<span class="debit">DEBIT</span></span></div>
  <div class="setting-list">
    ${detailField("Card number","•••• •••• •••• 7483")}
    ${detailField("Exp date","09/27")}
    ${detailField("CVV","•••")}
    ${detailField("Name on card","Eric Angelo")}
    ${detailField("Billing address","123 Loop Street, New York, NY 10001")}
  </div></div>`;
}

function detailField(k,v){return `<div class="setting"><div class="setting-main"><div class="setting-title">${k}</div><div class="setting-sub" style="font-size:12px;color:#ddd;margin-top:5px">${v}</div></div></div>`}

function pay(){
  const contacts=[["AC","Alex Carter","$AlexCarter"],["AR","Anthony Rogers","$AntRogers"],["AM","Ashley Moore","$AshleyMoore"],["BT","Ben Thompson","$BenT"]];
  return `<div class="screen">${header("Pay",false)}
  <div class="search"><span>${ic.search}</span><input class="input" placeholder="Name, $tag, phone or email"></div>
  <div class="section-head"><span class="section-title">Pay again</span></div>
  <div style="display:flex;gap:18px;overflow:auto">
    ${contacts.map(c=>`<button data-action="contact" style="border:0;background:none;color:white;min-width:48px;padding:0"><span class="contact-avatar" style="display:grid;margin:auto;width:38px;height:38px">${c[0]}</span><span style="font-size:10px;display:block;margin-top:7px;text-align:center">${c[1].split(" ")[0]}</span></button>`).join("")}
  </div>
  <div class="section-head"><span class="section-title">All contacts</span></div>
  ${contacts.map(c=>`<button class="contact-row" data-action="contact" style="width:100%;border:0;background:none;color:white;text-align:left"><span class="contact-avatar">${c[0]}</span><span><span class="contact-name">${c[1]}</span><span class="contact-handle" style="display:block">${c[2]}</span></span><span class="arrow">›</span></button>`).join("")}
  </div>`;
}

function financials(){
  return `<div class="screen">${header("Financials",false)}
  <div class="segment">${["spending","income","net worth"].map(x=>`<button class="${state.financialTab===x?'selected':''}" data-fin="${x}">${x[0].toUpperCase()+x.slice(1)}</button>`).join("")}</div>
  <div class="tabs" style="margin-top:10px;grid-template-columns:1fr"><button class="tab selected">This month ▾</button></div>
  ${state.financialTab==="spending"
    ? `<div class="large-balance">$3,286.21</div><div class="available">Total spending</div><div class="chart" style="margin-top:17px"><div class="donut-wrap"><div class="donut"></div><div class="legend">
      ${["Housing $1,450","Food $630","Transport $450","Shopping $310","Entertainment $205","Other $250"].map((x,i)=>`<div class="legend-row"><span class="dot ${["","b","c","d","e","f"][i]}"></span>${x}</div>`).join("")}
      </div></div></div>`
    : `<div class="chart"><div class="large-balance">${state.financialTab==="income"?"$6,420.00":"$92,410.32"}</div><div class="available">${state.financialTab==="income"?"Total income":"Estimated net worth"}</div><svg viewBox="0 0 360 130" preserveAspectRatio="none"><defs><linearGradient id="lg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00c969" stop-opacity=".25"/><stop offset="1" stop-color="#00c969" stop-opacity="0"/></linearGradient></defs><path d="M0,105 45,95 90,110 135,72 180,82 225,50 270,63 315,30 360,42" fill="url(#lg)"/><polyline points="0,105 45,95 90,110 135,72 180,82 225,50 270,63 315,30 360,42" fill="none" stroke="#00c969" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`
  }</div>`;
}

function profile(){
  return `<div class="screen">${header("Profile",false)}
  <div class="profile-head"><div class="profile-pic">EA</div><div><div class="profile-name">Eric Angelo</div><div class="handle">$EricAngelo</div></div></div>
  <div class="setting-list">
    ${settingRow("Personal information","",`<span class="chev">›</span>`,`personal`)}
    ${settingRow("Linked accounts","",`<span class="chev">›</span>`)}
    ${settingRow("Notifications","",`<span class="chev">›</span>`,`notifications`)}
    ${settingRow("Privacy & security","",`<span class="chev">›</span>`,`settings`)}
    ${settingRow("Help","",`<span class="chev">›</span>`,`help`)}
    ${settingRow("Log out","",`<span class="chev">›</span>`,`logout`)}
  </div></div>`;
}

function settingRow(title,sub,right="",action=""){
  const icon = title==="Personal information"?ic.user
    :title==="Linked accounts"?ic.linked
    :title==="Notifications"?ic.bell
    :title==="Privacy & security"?ic.lock
    :title==="Help"?ic.help
    :title==="Log out"?ic.logout
    :title==="Freeze card"?ic.lock
    :title==="Virtual card"?ic.card
    :title==="Card limits"?ic.shield
    :ic.settings;
  return `<button class="setting ${title==="Log out"?"logout":""}" ${action?`data-action="${action}"`:""}>${icon}<span class="setting-main"><span class="setting-title">${title}</span>${sub?`<span class="setting-sub">${sub}</span>`:""}</span>${right}</button>`;
}

function personal(){return `<div class="screen">${header("Personal information")}<div class="setting-list">${detailField("Full name","Eric Angelo")}${detailField("Email","ericangelo@example.com")}${detailField("Phone","(123) 456-7890")}${detailField("Address","123 Loop Street, New York, NY 10001")}${settingRow("Update information","",`<span class="chev">›</span>`)}</div></div>`}
function settings(){return `<div class="screen">${header("Settings",false)}<div class="setting-list">${settingRow("Security","Manage your security settings",`<span class="chev">›</span>`,"security")}${settingRow("App preferences","Customize your experience",`<span class="chev">›</span>`)}${settingRow("Theme","Dark",`<span class="chev">›</span>`)}${settingRow("About Loop","Version 1.0.0",`<span class="chev">›</span>`)}</div></div>`}
function notifications(){return `<div class="screen">${header("Notifications",false)}<div class="setting-list">
  ${notificationRow("Transaction alerts","Get notified about transactions","transactions")}
  ${notificationRow("Deposit alerts","Get notified about deposits","deposits")}
  ${notificationRow("Spending insights","Get spending insights and tips","insights")}
  ${notificationRow("Promotions","Get offers and promotions","promotions")}
</div></div>`}
function notificationRow(title,sub,key){return `<div class="setting">${ic.bell}<span class="setting-main"><span class="setting-title">${title}</span><span class="setting-sub">${sub}</span></span><button class="switch ${state.notifications[key]?'on':''}" data-toggle="${key}"></button></div>`}

const NO_NAV_SCREENS=["transfer","transferAmount"];
function render(){
  const views={home,accounts,accountDetail,transfer,transferAmount,cards,cardDetail,pay,financials,profile,personal,settings,notifications};
  document.querySelector("#screen").innerHTML=(views[state.screen]||home)();
  document.querySelector(".phone-shell").classList.toggle("nav-hidden",NO_NAV_SCREENS.includes(state.screen));
  renderNav();bind();
  document.querySelector("#screen").scrollTop=0;
}
function go(screen){state.screen=screen;render()}
function toast(msg){const el=document.querySelector("#toast");el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),1800)}
function bind(){
  document.querySelectorAll("[data-nav]").forEach(b=>b.onclick=()=>go(b.dataset.nav));
  document.querySelectorAll("[data-fin]").forEach(b=>b.onclick=()=>{state.financialTab=b.dataset.fin;render()});
  document.querySelectorAll("[data-toggle]").forEach(b=>b.onclick=()=>{const k=b.dataset.toggle;state.notifications[k]=!state.notifications[k];render()});
  document.querySelectorAll("[data-key]").forEach(b=>b.onclick=()=>{
    const k=b.dataset.key;
    let d=state.transferAmountDigits||"0";
    if(k==="back"){d=d.length>1?d.slice(0,-1):"0"}
    else if(d.length<7){d=d==="0"?k:d+k}
    state.transferAmountDigits=d;
    render();
  });
  document.querySelectorAll("[data-action]").forEach(b=>b.onclick=()=>{
    const a=b.dataset.action;
    if(a==="back"){state.screen==="transferAmount"?go("transfer"):go("home")}
    else if(a==="send"||a==="sendMode"){state.transferMode="send";go("transfer")}
    else if(a==="request"||a==="requestMode"){state.transferMode="request";go("transfer")}
    else if(a==="pay")go("pay");
    else if(a==="deposit")toast("Deposit flow ready");
    else if(a==="notifications")go("notifications");
    else if(a==="help")toast("Help center opened");
    else if(a==="profile")go("profile");
    else if(a==="accounts")go("accounts");
    else if(a==="accountDetail")go("accountDetail");
    else if(a==="cardDetail")go("cardDetail");
    else if(a==="contact")toast("Contact selected");
    else if(a==="newAccount")toast("Account options opened");
    else if(a==="move")toast("Move money flow ready");
    else if(a==="accountInfo")toast("Account information opened");
    else if(a==="freeze"){b.classList.toggle("on");toast(b.classList.contains("on")?"Card frozen":"Card unfrozen")}
    else if(a==="virtual")toast("Virtual card details opened");
    else if(a==="personal")go("personal");
    else if(a==="settings")go("settings");
    else if(a==="security")toast("Security settings opened");
    else if(a==="logout")toast("You are still signed in — demo mode");
    else if(a==="reviewTransfer"){
      if(state.transferMode==="send"){
        const name=(document.querySelector("#toName")?.value||"").trim();
        const accountNumber=(document.querySelector("#toAccountNumber")?.value||"").trim();
        const bank=document.querySelector("#toBank")?.value||"Chase Bank";
        const note=(document.querySelector("#toNote")?.value||"").trim();
        if(!name||!accountNumber){toast("Enter recipient details");return}
        state.transferForm={name,accountNumber,bank,note};
        state.transferAmountDigits="0";
        go("transferAmount");
      } else {
        const input=document.querySelector("#amountInput");
        const amount=parseFloat((input?.value||"").replace(/[$,]/g,""));
        if(!amount||amount<=0){toast("Enter an amount");return}
        toast("Request ready for confirmation");
      }
    }
    else if(a==="sendAmount"){
      const amount=parseInt(state.transferAmountDigits||"0",10);
      if(!amount||amount<=0){toast("Enter an amount");return}
      if(amount>state.balance){toast("Amount exceeds balance");return}
      state.pendingAmount=amount;
      openPinModal();
    }
  });
}

/* ── PIN confirmation + transaction status overlays ── */
const pin={digits:"",error:false};

function pinBoxesEl(){return document.querySelectorAll("#pinBoxes .pin-box")}
function renderPinBoxes(){
  pinBoxesEl().forEach((b,i)=>{
    const filled=i<pin.digits.length;
    b.classList.toggle("filled",filled);
    b.innerHTML=filled?'<span class="dot"></span>':'';
  });
  document.querySelector("#pinError").classList.toggle("show",pin.error);
}

function onViewportResize(){
  const input=document.querySelector("#pinNativeInput");
  const sheet=document.querySelector("#pinSheet");
  if(document.activeElement!==input||!sheet)return;
  const vv=window.visualViewport;
  if(!vv){sheet.style.transform="translateY(-96px)";return}
  const kbHeight=Math.max(0,window.innerHeight-vv.height-vv.offsetTop);
  sheet.style.transform=kbHeight>40?`translateY(-${kbHeight}px)`:"translateY(0px)";
}

function openPinModal(){
  pin.digits="";pin.error=false;
  renderPinBoxes();
  const overlay=document.querySelector("#pinOverlay");
  const sheet=document.querySelector("#pinSheet");
  overlay.classList.remove("hidden");
  sheet.style.transform="translateY(100%)";
  void sheet.offsetHeight;
  requestAnimationFrame(()=>{
    overlay.classList.add("show");
    sheet.style.transform="translateY(0px)";
  });
  const input=document.querySelector("#pinNativeInput");
  input.value="";
  setTimeout(()=>input.focus(),280);
}
function closePinModal(){
  const overlay=document.querySelector("#pinOverlay");
  const sheet=document.querySelector("#pinSheet");
  overlay.classList.remove("show");
  sheet.style.transform="translateY(100%)";
  document.querySelector("#pinNativeInput").blur();
  setTimeout(()=>overlay.classList.add("hidden"),300);
}
function checkPin(v){
  if(v===TRANSACTION_PIN){
    setTimeout(()=>{closePinModal();setTimeout(completeTransfer,320)},120);
  } else {
    pin.error=true;renderPinBoxes();
    const sheet=document.querySelector("#pinSheet");
    sheet.classList.add("shake");
    setTimeout(()=>{
      sheet.classList.remove("shake");
      pin.digits="";pin.error=false;
      document.querySelector("#pinNativeInput").value="";
      renderPinBoxes();
    },500);
  }
}

const TRANSACTION_PIN="1472";

function completeTransfer(){
  const amount=state.pendingAmount;
  const f=state.transferForm;
  state.balance-=amount;
  const now=new Date();
  state.lastTx={
    name:f.name||"Recipient",
    bank:f.bank||"Chase Bank",
    accountNumber:f.accountNumber||"",
    amount,
    txId:"N"+Math.floor(1e11+Math.random()*8.9e11),
    time:now.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),
    date:now.toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric"})
  };
  state.transactions.unshift({name:f.name||"Transfer",meta:"Just now",value:"-"+money(amount),type:"Transfer",avatar:(f.name||"TR").slice(0,2).toUpperCase()});
  state.transferForm={name:"",accountNumber:"",bank:"Chase Bank",note:""};
  state.transferAmountDigits="0";
  go("home");
  openTxModal();
}

function openTxModal(){
  const overlay=document.querySelector("#txOverlay");
  overlay.classList.remove("hidden");
  renderTxPending();
  requestAnimationFrame(()=>overlay.classList.add("show"));
  setTimeout(renderTxSuccess,10000);
}
function closeTxModal(){
  const overlay=document.querySelector("#txOverlay");
  overlay.classList.remove("show");
  setTimeout(()=>overlay.classList.add("hidden"),300);
}

function renderTxPending(){
  const t=state.lastTx;
  const last4=t.accountNumber?t.accountNumber.slice(-4):"••••";
  document.querySelector("#txContent").innerHTML=`
    <div class="tx-pending">
      <div class="spinner"></div>
      <div class="tx-pending-title">Processing transfer</div>
      <div class="tx-pending-sub">Please wait a moment<span class="tx-dots"><span>.</span><span>.</span><span>.</span></span></div>
      <div class="tx-summary-card">
        <div class="tx-summary-amount">${money(t.amount)}</div>
        <div class="tx-summary-row"><span>To</span><b>${t.name}</b></div>
        <div class="tx-summary-row"><span>Bank</span><b>${t.bank}</b></div>
        <div class="tx-summary-row"><span>Account</span><b>····${last4}</b></div>
      </div>
    </div>`;
}

function renderTxSuccess(){
  const t=state.lastTx;
  const last4=t.accountNumber?t.accountNumber.slice(-4):"••••";
  const confettiColors=["#00c969","#ffd21a","#55a8e8","#ec6c93","#9a7bd4"];
  const confetti=confettiColors.map((c,i)=>{
    const angle=(i/confettiColors.length)*Math.PI*2;
    const dx=Math.round(Math.cos(angle)*46);
    const dy=Math.round(Math.sin(angle)*46);
    return `<span style="background:${c};left:calc(50% - 3px);top:calc(50% - 3px);--tt:translate(${dx}px,${dy}px);animation-delay:${(i*0.05).toFixed(2)}s"></span>`;
  }).join("");
  document.querySelector("#txContent").innerHTML=`
    <button class="tx-close" id="txClose" aria-label="Close">&times;</button>
    <div class="tx-success">
      <div class="success-check-wrap">
        <div class="confetti">${confetti}</div>
        <div class="success-check">${ic.check||'<svg viewBox="0 0 24 24"><path d="M4 12l6 6L20 6"/></svg>'}</div>
      </div>
      <div class="tx-success-title">Payment Successful</div>
      <div class="tx-success-sub">To ${t.name} · ${t.bank} ····${last4}</div>
      <div class="tx-details">
        <div class="tx-details-head">Transaction details</div>
        <div class="tx-row"><span>Status</span><b class="status-ok">Completed ✓</b></div>
        <div class="tx-row"><span>Recipient</span><b>${t.name}</b></div>
        <div class="tx-row"><span>Bank</span><b>${t.bank}</b></div>
        <div class="tx-row"><span>Account</span><b>····${last4}</b></div>
        <div class="tx-row"><span>Time</span><b>${t.time}</b></div>
        <div class="tx-row"><span>Date</span><b>${t.date}</b></div>
        <div class="tx-row"><span>Transaction ID</span><b>${t.txId}</b></div>
        <div class="tx-row"><span>Amount</span><b>${money(t.amount)}</b></div>
        <div class="tx-row"><span>Platform fee</span><b style="color:#8f9694;text-decoration:line-through">$0.24</b>&nbsp;<b>Free</b></div>
        <div class="tx-row total"><span>Total</span><b>${money(t.amount)}</b></div>
      </div>
      <button class="tx-done" id="txDone">Done</button>
    </div>`;
  document.querySelector("#txClose").onclick=closeTxModal;
  document.querySelector("#txDone").onclick=closeTxModal;
}

function initOverlays(){
  const input=document.querySelector("#pinNativeInput");
  input.addEventListener("input",e=>{
    const v=e.target.value.replace(/\D/g,"").slice(0,4);
    e.target.value=v;
    pin.digits=v;pin.error=false;
    renderPinBoxes();
    if(v.length===4)checkPin(v);
  });
  input.addEventListener("focus",()=>{onViewportResize()});
  input.addEventListener("blur",()=>{
    const overlay=document.querySelector("#pinOverlay");
    const sheet=document.querySelector("#pinSheet");
    if(sheet&&overlay&&overlay.classList.contains("show"))sheet.style.transform="translateY(0px)";
  });
  document.querySelector("#pinBoxes").addEventListener("click",()=>input.focus());
  document.querySelector("#pinClose").onclick=()=>closePinModal();
  if(window.visualViewport){
    window.visualViewport.addEventListener("resize",onViewportResize);
    window.visualViewport.addEventListener("scroll",onViewportResize);
  }
}
render();
initOverlays();
