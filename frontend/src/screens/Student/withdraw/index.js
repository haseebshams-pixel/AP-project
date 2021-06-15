import MotionHoc from '../MotionHoc';
import './style.css'

const WithdrawComponent = () => {
  return (
    <div>
      <div class="first">
        <div class="second">
          <h3 style={{ color: 'black' }}> Registered Courses! </h3>
        </div>
        <div>
          <div class="tbl-header">
            <table id="example" cellpadding="0" cellspacing="0" border="0">
              <thead><tr><td class = "text" width="150px">Course Code</td><td class = "text" width="250px">Course Name</td><td class = "text" width="115px">Section</td><td class = "text" width="150px">Status</td></tr></thead>
            </table>
          </div>
          <div class="tbl-content">
            <table id="example" cellpadding="0" cellspacing="0" border="0">
              <tbody>
                <tr>
                  <td width="150px">218</td>
                  <td width="250px">Advance Programming</td>
                  <td ALIGN="center" width="115px">A</td>
                  <td ><button class = "button2">With Draw!</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const Withdraw = MotionHoc(WithdrawComponent);

export default Withdraw;