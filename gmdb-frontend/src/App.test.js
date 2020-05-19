import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import flushPromises from './utils.test'

describe('App', () => {
  // it('renders learn react link', () => {
  //   const { getByText } = render(<App />);
  //   const linkElement = getByText(/Movies/i);
  //   expect(linkElement).toBeInTheDocument();
  // });

  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.length).toBe(1)
  });

  it('displays a list of movies from an external API call', async () => {
    //SETUP
    const expectedStatusCode = 500
    const response = [
      { "id": 0, "title": "abc" },
      { "id": 1, "title": "def" },
      { "id": 2, "title": "ghi" }
    ]

    const fetchMock = jest.fn()
    const oldFetch = global.fetch
    global.fetch = fetchMock
    fetchMock.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve(response)
        }
      })
    })

    const wrapper = shallow(<App />)
    await flushPromises()

    //EXERCISE
    wrapper.update()

    //ASSERT
    expect(fetchMock).toHaveBeenCalledWith("http://localhost:3001/movies")
    expect(wrapper.state().movies).toEqual(response)

    //TEARDOWN
    global.fetch = oldFetch
  })

  it('test inputs in text box and submit via button', () => {
    //SETUP
    const response = [
      { "id": 0, "title": "abc" },
      { "id": 1, "title": "def" },
      { "id": 2, "title": "ghi" }
    ]

    //EXERCISE
    const wrapper = shallow(<App />)
    wrapper.setState({
      movies: response
    })

    const searchTitle = "abc"
    wrapper.instance().titleSearch(searchTitle)

    //ASSERT
    expect(wrapper.state().movies.length).toBe(1)
    expect(wrapper.state().movies[0].title).toEqual("abc")

    //TEARDOWN

  })

  it('test inputs searched for', () => {
    //SETUP
    const response = [
      { "id": 0, "title": "abc" },
      { "id": 1, "title": "abcz" },
      { "id": 2, "title": "qabcz" },
      { "id": 3, "title": "qabc" },
      { "id": 4, "title": "def" },
      { "id": 5, "title": "ghi" },
      { "id": 6, "title": "ABCdef" }
    ]

    //EXERCISE
    const wrapper = shallow(<App />)
    wrapper.setState({
      movies: response
    })

    const searchTitle = "abc"
    wrapper.instance().titleSearch(searchTitle)

    //ASSERT
    expect(wrapper.state().movies.length).toBe(5)
    expect(wrapper.state().movies[0].title.includes("abc")).toBe(true)

    //TEARDOWN

  })
})
