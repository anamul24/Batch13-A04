const totalCountEl = document.getElementById('totalCount');
const interviewCountEl = document.getElementById('interviewCount');
const rejectedCountEl = document.getElementById('rejectedCount');
const jobsCountEl = document.getElementById('jobsCount');
const emptyState = document.getElementById('emptyState');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

let activeFilter= 'all';

function getJobCards(){
    return document.querySelectorAll('.job-card');

}

function updateCounts(){
    const jobCards = getJobCards();
    const total = jobCards.length;
    const interview = document.querySelectorAll('.job-card[data-status="interview"]').length;
    const rejected = document.querySelectorAll('.job-card[data-status="rejected"]').length;

    totalCountEl.textContent= total;
    interviewCountEl.textContent= interview;
    rejectedCountEl.textContent= rejected;

    jobsCountEl.textContent= `${total} job${total !==1 ? 's' : ''}`;
    const visibleJobs = Array.from(jobCards).filter(card => activeFilter==='all' || card.dataset.status===activeFilter);
   
    emptyState.classList.toggle('hidden', visibleJobs.length>0)

}

function setStatus(jobCard,status){
    const badge=jobCard.querySelector('.status-badge');

    if(status === 'interview'){
        jobCard.dataset.status= 'interview';
        badge.textContent='INTERVIEW';
        badge.className= 'px-3 py-1 text-xs rounded-md bg-green-100 text-green-600 font-medium status-badge mt-3';  

    }
    else if(status === 'rejected'){
        jobCard.dataset.status= 'rejected';
        badge.textContent='REJECTED';
        badge.className= 'px-3 py-1 text-xs rounded-md bg-red-100 text-red-600 font-medium status-badge mt-3';  
    }
    else{
        jobCard.dataset.status= 'not-applied';
        badge.textContent='NOT APPLIED';
        badge.className= 'px-3 py-1 text-xs rounded-md bg-red-100 text-red-600 font-medium status-badge mt-3'; 
    }

    updateCounts();
    filterJobs(activeFilter);
}

function filterJobs(filter){
    activeFilter= filter;
    const jobCards= getJobCards();

    jobCards.forEach(card=>{
        if(filter==='all' || card.dataset.status=== filter){
            card.style.display= 'flex';
        }
        else{
            card.style.display= 'none';
        }
    });
    updateCounts();
    setActiveTab(filter);
}
function setActiveTab(filter){
    
    const buttons=[allFilterBtn, interviewFilterBtn,rejectedFilterBtn];
    buttons.forEach(btn=>{
        btn.classList.remove('btn-primary','btn-active');
        btn.classList.add('btn-ghost');
    });
    
    
    if(filter==='all'){
        allFilterBtn.classList.remove('btn-ghost');
        allFilterBtn.classList.add('btn-primary','btn-active');
    }
    else if(filter==='interview'){
        interviewFilterBtn.classList.remove('btn-active');
        interviewFilterBtn.classList.add('btn-primary','btn-active');
    }
    else if(filter=== 'rejected'){
        rejectedFilterBtn.classList.remove('btn-active');
        rejectedFilterBtn.classList.add('btn-primary','btn-active');
    }
}

function addEventListener(){
    const jobCards = getJobCards();
    jobCards.forEach(card=> {
        card.querySelector('.interview-btn').onclick = () =>setStatus(card, 'interview');
        card.querySelector('.rejected-btn').onclick = () =>setStatus(card, 'rejected');
        card.querySelector('.delete-btn').onclick = () =>{
            card.remove();
            updateCounts();
            filterJobs(activeFilter);
        };
    });
}

allFilterBtn.onclick= () => filterJobs('all');
interviewFilterBtn.onclick = () => filterJobs('interview');
rejectedFilterBtn.onclick = () => filterJobs('rejected');

updateCounts();
addEventListener();
filterJobs('all');