const classNames = [
  'cq-raised',
  'cq-primary'
]
export default {
  name: 'component',
  render (h) {
    return (
      <div class="">
        <cq-button class={classNames}>Hello</cq-button>
        <cq-button class={classNames} disabled>Hello</cq-button>
      </div>
    )
  }
}
