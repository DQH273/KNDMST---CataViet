import { useState } from "react";
import { pics } from "./Data";
import { Row, Col, Card, Button, Form } from "react-bootstrap";

function Catlogue() {
  const [chonTag, setChonTag] = useState("Tags");
  const [selectedItem, setSelectedItem] = useState(null);

  const tags = ["Tags", ...new Set(pics.map((t) => t.tag))];

  const chonPics = pics.filter(
    (pic) => pic.tag === chonTag || chonTag === "Tags",
  );

  return (
    <>
      <Row>
        <h1 className="mt-3 text-center">Catalogue Văn Hóa Việt</h1>
      </Row>

      {/* Filter */}
      <Row className="mb-3">
        <Col md={3}>
          <Form.Select
            value={chonTag}
            onChange={(e) => setChonTag(e.target.value)}
          >
            {tags.map((t, index) => (
              <option key={index}>{t}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      <Row>
        {chonPics.map((p) => (
          <Col key={p.id} md={3} className="d-flex">
            <Card className="mb-3 p-2 h-100 d-flex flex-column">
              <Card.Img
                src={p.img}
                alt={p.name}
                height={200}
                style={{ objectFit: "cover" }}
              />

              <Card.Body className="d-flex flex-column flex-grow-1">
                <div>
                  <h5>{p.name}</h5>
                  <hr />
                  <p>
                    <b>Mô tả: </b>
                    {p.desc}
                  </p>
                </div>

                <div className="mt-auto text-center">
                  <span className="badge bg-warning text-dark d-block mb-2">
                    {p.tag}
                  </span>

                  <Button onClick={() => setSelectedItem(p)}>
                    Xem chi tiết
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      {selectedItem && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedItem.name}</h5>
                <button
                  className="btn-close"
                  onClick={() => setSelectedItem(null)}
                ></button>
              </div>

              <div className="modal-body">
                <img
                  src={selectedItem.img}
                  alt={selectedItem.name}
                  className="img-fluid mb-3"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                  }}
                />

                <p>
                  <strong>Mô tả: </strong>
                  {selectedItem.detail || selectedItem.desc}
                </p>

                {selectedItem.vibe && (
                  <p>
                    <strong>Vibe: </strong>
                    {selectedItem.vibe}
                  </p>
                )}

                <span className="badge bg-warning text-dark">
                  {selectedItem.tag}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Catlogue;
