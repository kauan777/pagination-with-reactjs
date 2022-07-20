import styled from 'styled-components'

export const MainContainerContent = styled.main`

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    position: relative;
    margin: 0 auto;
    padding: 2rem 4rem;

    .whileLoading{
        width: 100%;
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loading{
        margin-bottom: 5rem;
    }


`

export const Pagination = styled.div`

        &.pagination-first{
            padding: 3rem 4rem 0rem 4rem;
        }

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 4rem;

        .index-container{

            span{
                padding: 10px;
                color: #838383;
            }

            .currentIndex{
                display: inline-block ;
                background: #F8333C;
                color: #fff;
                border-radius: 0.25rem;
                font-weight: bold;
            }
        }

        button{
            cursor: pointer;
            color: #fff;
            background: #F8333C;
            border: none;
            font-family: 'Roboto';
            font-weight: bold;
            border-radius: .25rem;
            width: 100px;
            padding: 14px;
            transition: ease-in-out .2s;
       
            &:hover{
                transform: scale(0.9);
            }

            &:disabled{
                filter: brightness(0.7);
                cursor: not-allowed;
            }
        }
        

`
