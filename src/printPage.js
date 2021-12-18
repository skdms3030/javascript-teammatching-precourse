import { CREW } from './constant.js';
    const $app = document.querySelector('#app');
export function printPage() {


    $app.innerHTML += `
<header>
  <h1>우테코 크루와 팀 매칭 관리 보드</h1>
  <nav>
    <ul>
      <li>
        <button id='crew-tab'>크루 관리</button>
      </li>
      <li>
        <button id='team-tab'>팀 매칭 관리</button>
      </li>
    </ul>
  </nav>
</header>

<main id="crew-tab-content">
  <div id='crew-tab-select-course' class="show">
    <h3>크루를 관리할 코스를 선택해주세요</h3>
    <div>
      <input type="radio" name="course" value="frontend" id="frontend-course" />
      <label for="frontend">프론트엔드</label>
      <input type="radio" name="course" value="backend" id="backend-course" />
      <label for="backend">백엔드</label>
    </div>
  </div>

<div id="selected-course">
<div id="crew-manage" class="hide">
    <h3 id="crew-manage-title"> 크루 관리</h3>
    <div>
      <label>크루 이름</label>
      <input type="text" id="crew-name-input" />
      <button id="add-crew-buttton">확인</button>
    </div>
  </div>

  <div id="crew-list" class="hide">
    <h3 id="crew-list-title">크루 목록</h3>
    <table border="1" id="crew-table">
      <thead>
        <tr>
          <th></th>
          <th>크루</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody id="crew-table-tbody">
        <tr>
          <td>1</td>
          <td>준</td>
          <td>
            <button class="delete-crew-buttton">삭제</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

</main>




<main id="team-tab-content" class="hide">

<section id="team-tab-select-mission">
  <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
  <form>
    <select id="course-select">
      <option>프론트엔드</option>
      <option>백엔드</option>
    </select>
    <select id="mission-select">
      <option>숫자야구게임</option>
    </select>
    <button id="show-team-matcher-button">확인</button>
  </form>
</section>



<section class="hide">
  <h3>프론트엔드 숫자야구게임 미션의 팀 매칭</h3>
  <div>
    <div>
      <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
      <form>
        <label>1팀당 인원 수</label>
        <input type="number" id="team-member-count-input" />
        <button id="match-team-button">팀 매칭</button>
      </form>
    </div>
    <h4>크루 목록</h4>
    <ul>
      <li>준</li>
      <li>포코</li>
    </ul>
  </div>
</section>

<!-- 팀 매칭이 된 경우 -->
<section class="hide">
  <h3>프론트엔드 숫자야구게임 조회</h3>
  <p>팀이 매칭되었습니다.</p>
  <ul id="team-match-result">
    <li>준,포코</li>
  </ul>
  <p>
    팀을 재매칭 하시겠습니까?
    <button id="rematch-team-button">재매칭</button>
  </p>
</section>

</main>`
}


// export function selectCrew(){
//     //const $crewTabContent = document.querySelector('#crew-tab-content')
//     const $selectedCourse = document.querySelector('#selected-course')
//     $selectedCourse.innerHTML = `  <section id="crew-manage">
//     <h3>${CREW.COURSE} 크루 관리</h3>
//     <form>
//       <label>크루 이름</label>
//       <input type="text" id="crew-name-input" />
//       <button id="add-crew-buttton">확인</button>
//     </form>
//   </section>

//   <section id="crew-list">
//     <h3>${CREW.COURSE} 크루 목록</h3>
//     <table border="1" id="crew-table">
//       <thead>
//         <tr>
//           <th></th>
//           <th>크루</th>
//           <th>관리</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>준</td>
//           <td>
//             <button class="delete-crew-buttton">삭제</button>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </section>`
// }