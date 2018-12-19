let id;

function execute(method, argv) {
	top.postMessage({ id, method, argv }, '*');
}

window.addEventListener('message', function init(event) {
	id = event.data.id;
	execute('ready');

	window._portal_sdk_ = {
		resize(width, height) {
			execute('resize', { width, height });
		},
		setTitle(title) {
			execute('setTitle', { title });
		},
		close() {
			execute('close');
		}
	};

	const readyEvent = document.createEvent('Event');
	readyEvent.initEvent('sdk-ready', true, true);
	window.dispatchEvent(readyEvent);

	window.removeEventListener('message', init);
});