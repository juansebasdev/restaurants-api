class MockJwtService {
  sign() {
    const token = 'token';
    return { token };
  }
}
export default MockJwtService;
