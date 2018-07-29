import styled from "styled-components";

export const Section = styled.div``;
export const Root = styled.div``;
export const Wrapper = styled.div``;

export const Container = styled.section`
   padding: 10px;
   display: flex;
   align-items: flex-start;
   flex-wrap: wrap;
`;

export const ListRoot = styled.article`
   width: 70%;
   display: flex;
   flex-direction: column;
   padding: 10px;
`;

export const Row = styled.article`
   width: 100%;
   border: 1px solid gray;
   display: flex;
   flex-wrap: wrap;
   &:nth-child(odd) {
      background-color: white;
   }
`;

export const FilterRoot = styled.aside`
   display: flex;
   width: 25%;
   padding: 10px;
`;

export const FilterContainer = styled.div`
   background-color: white;
   width: 100%;
`;

export const Self = styled.div`
   padding: 5px 10px;
   display: flex;
   flex-direction: column;
`;

export const P1 = styled.p`
   color: #989898;
   font-weight: bold;
`;

export const P2 = styled.p`
   color: #4a4a4a;
`;

export const P3 = styled.p`
   color: #4a4a4a;
   font-size: 1.6rem;
`;

export const P4 = styled.p`
   color: #4a4a4a;
   font-size: 2rem;
`;

export const Title = styled.div`
   display: flex;
`;

export const FilterBlock = styled.div`
   display: flex;
   flex-wrap: wrap;
   padding: 10px;
   background-color: #d0d0ec;
`;

export const Content = styled.div`
   display: flex;
   padding: 10px;
   width: 100%;
`;

export const Label = styled.label`
   display: flex;
   align-items: center;
   padding:5px;
`;

export const Image = styled.img`
   width: 100px;
   height: 100px;
   object-fit: cover;
`;

export const Input = styled.input`
   padding: 10px;
   font-size: 16px;
`;
