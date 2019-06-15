import styled from 'styled-components';

export const Container = styled.div`
  width: 25%;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 2%;
  top: 3%;
  height: 92%;
  border-radius: 5px;
  overflow: auto;

  p {
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
  }

  ul {
    list-style: none;

    li {
      border-bottom: solid 1px #9e9e9e;
      div {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        padding: 15px;

        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }

        .user-info {
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;

          strong {
            margin-bottom: 5px;
          }

          span {
            color: #757575;
          }
        }

        button {
          background: transparent;
          cursor: pointer;
        }

        i {
          font-size: 20px;
        }

        .remove {
          color: #e53935;
        }

        .go-to-page {
          font-weight: bold;
          color: #424242;
          margin-left: 15px;
        }
      }
    }
  }
`;
