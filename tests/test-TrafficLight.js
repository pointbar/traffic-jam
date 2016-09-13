describe('# TrafficLight', () => {
  it('should create a TrafficLight', () => {
    const bordeaux = new TrafficLight({name: 'FX104', location: {lat: 41.3, lgt: 34.2}})
    expect(bordeaux).toBeAn('object')
    expect(bordeaux.name).toBe('FX104')
    expect(bordeaux.status).toBe('')
    expect(bordeaux.location).toContainKeys(['lat', 'lgt'])

  })
})
