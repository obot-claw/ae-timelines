const events = [
  {id:'01-001', term:'Headache', start:2, end:8}, {id:'01-001', term:'Nausea', start:12, end:18},
  {id:'01-002', term:'Rash', start:5, end:21}, {id:'01-003', term:'Fatigue', start:1, end:30},
  {id:'01-004', term:'Dizziness', start:16, end:22}
];
new Chart(document.getElementById('chart'), {
  type: 'bar',
  data: { labels: events.map(d => `${d.id} ${d.term}`), datasets: [{ label: 'AE duration', data: events.map(d => [d.start, d.end]), backgroundColor: '#60a5fa' }] },
  options: { indexAxis: 'y', responsive: true, plugins: { title: { display: true, text: 'AE timeline' }, tooltip: { callbacks: { label: ctx => `Study day ${ctx.raw[0]} to ${ctx.raw[1]}` } } }, scales: { x: { title: { display: true, text: 'Study day' } } } }
});
