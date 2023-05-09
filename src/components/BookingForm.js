import React, { useState } from "react";

function BookingForm({ onSubmit }) {
  const [tower, setTower] = useState('');
  const [floor, setFloor] = useState('');
  const [conferenceRoom, setConferenceRoom] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [comment, setComment] = useState('');

  function handleChangeTower(e) {
    setTower(e.target.value);
    console.log(e.target.value);
  }
  function handleChangeFloor(e) {
    setFloor(e.target.value);
  }
  function handleChangeRoom(e) {
    setConferenceRoom(e.target.value);
  }
  function handleChangeDate(e) {
    setSelectedDate(e.target.value);
    console.log(e.target.value);
  }
  function handleChangeTime(e) {
    setSelectedTime(e.target.value);
  }
  function handleChangeComment(e) {
    setComment(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    const formData = {
      tower: tower,
      floor: floor,
      conferenceRoom: conferenceRoom,
      selectedDate: selectedDate,
      selectedTime: selectedTime,
      comment: comment
    }
    console.log(JSON.stringify(formData));
  }
  function handleClearForm() {
    setTower('');
    setFloor('');
    setConferenceRoom('');
    setSelectedDate('');
    setSelectedTime('');
    setComment('');
  }

  return (
    <form name="bookingForm" className="form" onSubmit={handleSubmitForm} onReset={handleClearForm}>
      <h2 className="form__title">Заполните форму</h2>
      <div className="form__input-wrapper">
        <label className="form__input-label">Выберите башню:</label>
        <select
          id="tower"
          className="form__input"
          value={tower}
          onChange={handleChangeTower}
          required
        >
          <option value=''>Выберите башню</option>
          <option value='A'>А</option>
          <option value='Б'>Б</option>
        </select>
      </div>
      <div className="form__input-wrapper">
        <label className="form__input-label">Выберите этаж:</label>
        <select
          id="floor"
          className="form__input"
          value={floor}
          onChange={handleChangeFloor}
          required
        >
          <option value=''>Выберите этаж</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
          <option value='21'>21</option>
          <option value='22'>22</option>
          <option value='23'>23</option>
          <option value='24'>24</option>
          <option value='25'>25</option>
          <option value='26'>26</option>
          <option value='27'>27</option>
        </select>
      </div>
      <div className="form__input-wrapper">
        <label className="form__input-label">Выберите переговорную:</label>
        <select
          id="room"
          className="form__input"
          value={conferenceRoom}
          onChange={handleChangeRoom}
          required
        >
          <option value=''>Выберите переговорную</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
        </select>
      </div>
      <div className="form__input-wrapper">
        <label className="form__input-label">Выберите дату:</label>
        <input
          id="date"
          className="form__input"
          type='date'
          value={selectedDate}
          onChange={handleChangeDate}
          required
        />
      </div>
      <div className="form__input-wrapper">
        <label className="form__input-label">Выберите время:</label>
        <input
          id="time"
          className="form__input"
          type='time'
          value={selectedTime}
          onChange={handleChangeTime}
          required
        />
      </div>
      <div className="form__input-wrapper form__input-wrapper_type_text">
        <label className="form__input-label">Комментарий:</label>
        <textarea
          id="comment"
          className="form__input form__input_type_text"
          type='text'
          value={comment}
          onChange={handleChangeComment}
          placeholder='...'
        />
      </div>
      <div className="form__button-wrapper">
        <button type="submit" className="form__button">Отправить</button>
        <button type='reset' className="form__button">Очистить</button>
      </div>
    </form>
  )
}

export default BookingForm;