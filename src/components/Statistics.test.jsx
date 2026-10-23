import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import Statistics from './Statistics.jsx'

describe('Statistics', () => {
  it('shows all illustrative metrics and their disclaimer', () => {
    const markup = renderToStaticMarkup(createElement(Statistics))

    expect(markup).toContain('95%')
    expect(markup).toContain('90%')
    expect(markup).toContain('100%')
    expect(markup).toContain('not verified product claims')
  })
})
