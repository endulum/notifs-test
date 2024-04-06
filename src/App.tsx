function notify (): void {
  navigator.serviceWorker.ready.then(async (serviceWorker) => {
    await serviceWorker.showNotification('hi')
    setTimeout(() => {
      serviceWorker.getNotifications()
        .then((notifs): void => { notifs[0].close() })
        .catch((e) => { console.warn(e) })
    }, 3000)
  // eslint-disable-next-line no-console
  }).catch((e) => {
    console.warn(e)
    alert(e)
  })
}

export default function App (): JSX.Element {
  return <button type="button" onClick={notify}>notify</button>
}
