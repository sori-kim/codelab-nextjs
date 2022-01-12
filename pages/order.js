import Header from '../components/Header';

export default function Order() {
  return (
    <div className="container">
      <Header />
      <h1 className="text-lg  font-bold">Order</h1>
      <h2 className="text-xl font-bold">메뉴판</h2>
      <dl>
        <dt>에스프레소</dt>
        <dd>
          2,800원
          <small>
            <button>[ 선택 ]</button>
          </small>
        </dd>

        <dt>아메리카노</dt>
        <dd>
          3,000원
          <small>
            <button>[ 선택 ]</button>
          </small>
        </dd>

        <dt>카페라떼</dt>
        <dd>
          3,500원
          <small>
            <button>[ 선택 ]</button>
          </small>
        </dd>
      </dl>
      <hr />
      <h2 className="text-xl font-bold">주문서</h2>
      합계 : {'0'}원
      <hr />
      <button className="btn btn-primary">주문하기</button>
    </div>
  );
}
