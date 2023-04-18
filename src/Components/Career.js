import React from 'react';
import styled from "styled-components";

const Career = () => {
    const CareerContainer = styled.section`
      padding: 0 2rem;
    `;

    const CareerHeader = styled.h2`
      margin: 4rem 0 2rem;
      font-size: 2.8rem;
    `;
    const Period = styled.span`
      color: blueviolet;
      font-weight: bolder;
    `;
    const RowLeftHeader = styled.h3`
      font-size: 2rem;
      margin: 0 0 1rem;
    `
    const Project = styled.div`
      &:first-child {
        padding-top: 0;
      }

      box-sizing: border-box;
      padding: 1.5rem 0;

      & > h4 {
        font-size: 1.5rem;
        margin: 0 0 1rem;
      }

      & > .time {
        display: block;
        margin-bottom: 1.5rem;
      }

      & > h5 {
        font-size: 1.3rem;
        margin: 0 0 0.5rem;
      }
    `;

    return (
        <CareerContainer>
            <CareerHeader>職務経歴<Period>。</Period></CareerHeader>
            {/*<div className={"row"}>*/}
            {/*    <div className={"row-left"}>*/}
            {/*        <RowLeftHeader>companyName<Period>。</Period></RowLeftHeader>*/}
            {/*        <span className={"role"}>RoleName</span>*/}
            {/*        <span className={"time"}>*/}
            {/*           <time dateTime={"2022-04"}>2022.04</time>*/}
            {/*           ~*/}
            {/*           現在*/}
            {/*   </span>*/}
            {/*    </div>*/}
            {/*    <div className={"row-right"}>*/}
            {/*        <Project>*/}
            {/*            <h4>projectName</h4>*/}
            {/*            <span className={"time"}>*/}
            {/*                <time dateTime={"2022-05"}>2022.05</time>~現在*/}
            {/*            </span>*/}
            {/*            <h5>詳細</h5>*/}
            {/*            <p>旧環境から新環境へのマイグレーションをしております、システム改善はない見込みです。Javaや.NETのバージョンアップに対応します。</p>*/}
            {/*            <h5>私がやった事</h5>*/}
            {/*            <p>現在旧環境での結合テストを担当しております。</p>*/}
            {/*        </Project>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={"row"}>
                <div className={"row-left"}>
                    <RowLeftHeader>AN◇◇株式会社<Period>。</Period></RowLeftHeader>
                    <span className={"role"}>PG</span>
                    <span className={"time"}>
                       <time dateTime={"2022-07"}>2022.07</time>
                       ~
                       現在
               </span>
                </div>
                <div className={"row-right"}>
                    <Project>
                        <h4>大手サプリメントECサイトリニューアル案件</h4>
                        <span className={"time"}>
                            <time dateTime={"2023-01"}>2023.01</time>~現在
                        </span>
                        <h5>詳細</h5>
                        <p>HTMLでハードコーディングされていたのを新しい技術でリニューアルする案件</p>
                        <h5>私がやった事</h5>
                        <p>fastifyというNodeJSのフレームワークを用いてBFFのAPI実装を担当しました。</p>
                        <li>ログインAPIの実装</li>
                        <li>ログアウトAPIの実装</li>
                        <li>マイページTOP画面APIの実装</li>
                        <li>注文入力画面APIの実装</li>
                    </Project>
                    <Project>
                        <h4>産業廃棄物DX案件</h4>
                        <span className={"time"}>
                            <time dateTime={"2022-10"}>2022.10</time>
                            ~
                            <time dateTime={"2022-12"}>2022.12</time>
                        </span>
                        <h5>詳細</h5>
                        <p>補修案件</p>
                        <h5>私がやった事</h5>
                        <p>Storybook CSF2.0から3.0へのリファクタリングをしjestテストを入れました。</p>
                        <p>Typescriptを使ってはいるがstrictではないのでstrictに変換後600超えるエラー箇所を修正しました。</p>
                    </Project>
                    <Project>
                        <h4> 薬手帳サービスの施設向WEBアプリ開発</h4>
                        <span className={"time"}>
                            <time dateTime={"2022-07"}>2022.07</time>
                            ~
                            <time dateTime={"2022-09"}>2022.09</time>
                        </span>
                        <h5>詳細</h5>
                        <p>薬手帳サービスのWebアプリケーション開発</p>
                        <h5>私がやった事</h5>
                        <p>主にページの実装を担当しました。</p>
                        <li>Felicaカード管理ページ作成</li>
                        <li>スタッフアカウント管理ページ作成</li>
                        <li>QRコード生成ページ作成</li>
                        <li>施設情報ページ作成</li>
                        <li>証明書管理ページ作成</li>
                        <li>証明書ダウンロードページ作成</li>
                    </Project>
                </div>
            </div>
            <div className={"row"}>
                <div className={"row-left"}>
                    <RowLeftHeader>株式会社ト◇◇<Period>。</Period></RowLeftHeader>
                    <span className={"role"}>PG</span>
                    <span className={"time"}>
                       <time dateTime={"2022-04"}>2022.04</time>
                       ~
                       <time dateTime={"2022-06"}>2022.06</time>
               </span>
                </div>
                <div className={"row-right"}>
                    <Project>
                        <h4>大手バス会社マイグレーション案件</h4>
                        <span className={"time"}>
                            <time dateTime={"2022-05"}>2022.05</time>
                            ~
                            <time dateTime={"2022-06"}>2022.06</time>
                        </span>
                        <h5>詳細</h5>
                        <p>旧環境から新環境へのマイグレーションをしております、システム改善はない見込みです。Javaや.NETのバージョンアップに対応します。</p>
                        <h5>私がやった事</h5>
                        <p>旧環境での結合テストを担当しております。</p>
                    </Project>
                </div>
            </div>

        </CareerContainer>
    );
}

export default Career;