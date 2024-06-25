class MockHistoricRepository {
  private historics = [];

  create(historic) {
    const newHistoric = {
      ...historic,
      id: this.historics.length + 1,
    };
    return newHistoric;
  }

  find() {
    return this.historics;
  }

  save(historic) {
    this.historics.push(historic);
  }
}

export default MockHistoricRepository;
