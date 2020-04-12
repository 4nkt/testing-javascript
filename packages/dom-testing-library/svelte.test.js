import '@testing-library/jest-dom/extend-expect'
import {fireEventAsync} from './fire-event-async'
import {getQueriesForElement} from '@testing-library/dom'
import Counter from './counter.svelte'

function render(Component) {
  const container = document.createElement('div')

  new Component({target: container})

  return {container, ...getQueriesForElement(container)}
}

test('counter increments', async () => {
  const {getByText} = render(Counter)
  const counter = getByText('0')
  await fireEventAsync.click(counter)
  expect(counter).toHaveTextContent('1')

  await fireEventAsync.click(counter)
  expect(counter).toHaveTextContent('2')
})
