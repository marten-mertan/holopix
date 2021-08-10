<template>
    <div class="game">
        <div class="game-title">
            Rules:
        </div>
        <div class="game-rules">
            1. connect the same icons to each other <br>
            2. do NOT leave empty squares <br>
            3. paths cannot intersect
        </div>
        <div ref="game-table"
             class="game-table"
             :class="[refreshing ? 'in-refreshing' : null, creating ? 'in-creating' : null]">
            <div v-for="cell in cells" 
                 :key="cell.id"
                 class="game-table-cell"
                 :class="[cell.used ? cell.colorClass : null]"
                 :style="creating ? null : {top: cell.y*cellWidth+'px', left: cell.x*cellWidth+'px'}"
                 @mousedown="mouseDown(cell)"
                 @mouseup="mouseUp(cell)"
                 @mouseenter="mouseEnter(cell)">
                <svg v-if="cell.icon" 
                     :class="cell.icon">
                    <use :xlink:href="'icons/all.svg#' + cell.icon" />
                </svg>
            </div>
            <div ref="game-table-dashbox"
                 class="game-table-dashbox"
                 :class="[currentPath.length ? 'visible' : null, currentColorClass]">
                <svg id="icon-dashbox" 
                     viewBox="0 0 72 72">
                    <rect x="1" 
                          y="1" 
                          rx="8" 
                          ry="8" 
                          width="70" 
                          height="70" />
                </svg>

            </div>
        </div>
        <div class="game-controls">
            <button class="game-btn"
                    @click="newGame">
                NEW
            </button>
            <span class="game-score">Winning streak: {{ round }}</span>
            <button class="game-btn"
                    @click="refreshGame">
                TRY AGAIN
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Game',
        components: {
        },
        data() {
            return {
                tableWidth: 6,
                tableHeight: 6,
                cellWidth: 80,
                cells: [],
                currentPath: [],
                currentColorClass: '',
                paths: [],
                creating: false,
                refreshing: false,
                round: 0
            };
        },
        mounted() {
            this.$refs['game-table'].style.width = ` ${this.tableWidth * this.cellWidth}px`;
            this.$refs['game-table'].style.height = ` ${this.tableHeight * this.cellWidth}px`;
            this.currentPath = [];
            this.currentColorClass = '';
            this.paths = [];
            this.round = 0;
            this.cells = this.generateCells();
        },
        methods: {
            mouseDown(cell) {
                if (cell.value && !this.cells[cell.id].used) {
                    this.currentPath = [];
                    this.currentColorClass = cell.colorClass;
                    this.cells[cell.id].used = true;
                    this.currentPath.push(cell);
                    this.$refs['game-table-dashbox'].style.left = `${cell.x*this.cellWidth}px`;
                    this.$refs['game-table-dashbox'].style.top = `${cell.y*this.cellWidth}px`;
                }
            },
            mouseEnter(cell) {
                const len = this.currentPath.length;
                const previousCell = this.currentPath[len - 1];
                const stepBackCell = this.currentPath[len - 2];
                const firstCellInPath = this.currentPath[0];

                // когда возвращаемся обратно на предыдущую ячейку
                if (stepBackCell?.id === cell.id) {
                    this.cells[previousCell?.id].used = false;
                    if (!this.cells[previousCell?.id].value) {
                        this.cells[previousCell?.id].colorClass = '';
                    }
                    this.$refs['game-table-dashbox'].style.left = `${cell.x*this.cellWidth}px`;
                    this.$refs['game-table-dashbox'].style.top = `${cell.y*this.cellWidth}px`;
                    this.currentPath.pop();
                    return;
                }

                // проверка ячейки на валидность и запись ячейки в текущий путь
                if (previousCell?.id !== cell.id && 
                    ((previousCell?.x === cell.x && Math.abs(previousCell?.y - cell.y) === 1) || (previousCell?.y === cell.y && Math.abs(previousCell?.x - cell.x) === 1)) && 
                    !cell.used && 
                    (cell.value === 0 || cell.value === firstCellInPath?.value) && 
                    (previousCell?.value === 0 || (previousCell?.value === firstCellInPath?.value && previousCell?.id === firstCellInPath?.id))) {
                    this.cells[previousCell.id].used = true;
                    if (!this.cells[cell.id].value) {
                        this.cells[cell.id].colorClass = this.currentColorClass;
                    }
                    this.cells[cell.id].used = true;
                    this.$refs['game-table-dashbox'].style.left = `${cell.x*this.cellWidth}px`;
                    this.$refs['game-table-dashbox'].style.top = `${cell.y*this.cellWidth}px`;
                    this.currentPath.push(cell);
                }
            },
            mouseUp(cell) {
                const len = this.currentPath.length;
                const firstCellInPath = this.currentPath[0];
                const lastCell = this.currentPath[len - 1];
                if (cell.value === firstCellInPath?.value && cell.id !== firstCellInPath?.id && cell.id === lastCell.id) {
                    this.paths.push(this.currentPath);
                    for (const item of this.currentPath) {
                        this.cells[item.id].used = true;
                    }
                } else {
                    for (const item of this.currentPath) {
                        this.cells[item.id].used = false;
                    }
                }
                this.currentPath = [];
                if (this.allSellsUsed(this.cells)) {
                    this.$emit('speak', this.speaking);
                    this.nextRound();
                }
            },
            refreshGame() {
                this.refreshing = true;
                setTimeout(() => {
                    this.currentPath = [];
                    this.currentColorClass = '';
                    this.paths = [];
                    for (const item of this.cells) {
                        if (item.value !== -1) {
                            this.cells[item.id].used = false;
                        }
                        if (!item.value) {
                            this.cells[item.id].colorClass = '';
                        }
                    }

                    this.refreshing = false;
                }, 200);
            },
            newGame() {
                this.creating = true;
                setTimeout(() => {
                    this.currentPath = [];
                    this.currentColorClass = '';
                    this.paths = [];
                    this.round = 0;
                    this.cells = this.generateCells();

                    this.creating = false;
                }, 600);
            },
            nextRound() {
                this.creating = true;
                setTimeout(() => {
                    this.currentPath = [];
                    this.currentColorClass = '';
                    this.paths = [];
                    this.round++;
                    this.cells = this.generateCells();

                    this.creating = false;
                }, 600);
            },
            generateCells() {
                const len = this.tableWidth * this.tableHeight;
                const cells = [];
                let cellsUnused = [];
                for (let i=0; i<len; i++) {
                    const item = {
                        id: i,
                        value: 0,
                        colorClass: '',
                        icon: '',
                        used: false,
                        x: Math.floor(i % this.tableWidth),
                        y: Math.floor(i / this.tableWidth)
                    };
                    cells.push(item);
                    cellsUnused.push(item);
                }

                const girls = [
                    {
                        value: 1,
                        colorClass: 'aqua',
                        icon: 'icon-aqua'
                    },
                    {
                        value: 2,
                        colorClass: 'marine',
                        icon: 'icon-marine'
                    },
                    {
                        value: 3,
                        colorClass: 'fubuki',
                        icon: 'icon-fubuki'
                    },
                    {
                        value: 4,
                        colorClass: 'noel',
                        icon: 'icon-noel'
                    },
                    {
                        value: 5,
                        colorClass: 'korone',
                        icon: 'icon-korone'
                    },
                ];

                while (cellsUnused.length) {
                    const randomEl = cellsUnused[Math.floor(Math.random()*cellsUnused.length)];
                    const lengthPath = Math.floor(Math.random() * 6) + 4;
                    let currentEl = randomEl;
                    const randomGirl = girls[Math.floor(Math.random()*girls.length)];
                    for (let i=0; i<lengthPath; i++) {
                        cellsUnused = cellsUnused.filter(item => item.id !== currentEl.id);
                        const availableCells = cellsUnused.filter(item => (item.x === currentEl.x && Math.abs(item.y - currentEl.y) === 1) || (item.y === currentEl.y && Math.abs(item.x - currentEl.x) === 1));
                        if (!i) {
                            if (!availableCells.length) {
                                cells[currentEl.id].value = -1;
                                cells[currentEl.id].colorClass = 'empty';
                                cells[currentEl.id].used = true;
                                cells[currentEl.id].icon = '';
                                break;
                            } else {
                                cells[currentEl.id].value = randomGirl.value;
                                cells[currentEl.id].colorClass = randomGirl.colorClass;
                                cells[currentEl.id].icon = randomGirl.icon;
                                currentEl = availableCells[Math.floor(Math.random()*availableCells.length)];
                            }
                        } else if (!availableCells.length || i===(lengthPath-1)) {
                            cells[currentEl.id].value = randomGirl.value;
                            cells[currentEl.id].colorClass = randomGirl.colorClass;
                            cells[currentEl.id].icon = randomGirl.icon;
                            break;
                        } else {
                            currentEl = availableCells[Math.floor(Math.random()*availableCells.length)];
                        }
                    }
                }
                return cells;
            },

            // техническая
            printCurrentPath() {
                return [...this.currentPath.map(cell => cell.id)];
            },

            // техническая
            allSellsUsed(cells) {
                for (const item of cells) {
                    if (!item.used) {
                        return false;
                    }
                }
                return true;
            },
        }

    };
</script>

<style lang="scss">
    .game {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        background-color: #1fa3de;
        border-radius: 3px;
        border: 18px solid white;
        box-shadow: 0 0 6px rgba(0, 0, 0, .12), 0 1px 6px rgba(0, 0, 0, .24);
        z-index: 2;

        &-title {
            color: white;
            letter-spacing: 2px;
            font-size: 21px;
            line-height: 21px;
            font-weight: 300;
            margin-bottom: 12px;
            text-align: center;
        }

        &-rules {
            color: white;
            letter-spacing: 2px;
            font-size: 14px;
            line-height: 21px;
            font-weight: 300;
            margin-bottom: 20px;
            text-align: center;
        }

        &-table {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 10px;
            box-sizing: content-box;

            &.in-refreshing {
                .game-table-cell {
                    transform: rotate3d(1, 1, 0, 90deg);
                    transition: transform .15s ease;
                }
            }

            &.in-creating {
                .game-table-cell {
                    top: calc(50% - 40px);
                    left: calc(50% - 40px);
                    transform: rotate3d(0, 0, 1, 360deg);
                    transition: transform .6s ease, top .6s ease, left .6s ease;
                }
            }

            &-cell {
                position: absolute;
                flex: 0 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 80px;
                height: 80px;
                border: 1px solid rgba(255, 255, 255, .55);
                user-select: none;
                border-radius: 12px;
                overflow: hidden;
                cursor: pointer;
                z-index: 1;
                transition: transform .3s ease, top .6s ease, left .6s ease;

                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(255, 255, 255, .15);
                    backdrop-filter: blur(50px);
                    z-index: 1;
                }

                svg {
                    position: relative;
                    width: 46px;
                    height: 46px;
                    z-index: 2;
                }

                &.marine {
                    background-color: #c23b64;
                    border-color: #492727;

                    &:before {
                        background-color: rgba(255, 255, 255, 0);
                        backdrop-filter: blur(0);
                    }
                }

                &.aqua {
                    background-color: #c67cf1;
                    border-color: #97e6fa;

                    &:before {
                        background-color: rgba(255, 255, 255, 0);
                        backdrop-filter: blur(0);
                    }
                }

                &.fubuki {
                    background-color: white;
                    border-color: #8fccff;

                    &:before {
                        background-color: rgba(255, 255, 255, 0);
                        backdrop-filter: blur(0);
                    }
                }

                &.noel {
                    background-color: #29314d;
                    border-color: #d4a567;

                    &:before {
                        background-color: rgba(255, 255, 255, 0);
                        backdrop-filter: blur(0);
                    }
                }

                &.korone {
                    background-color: #f2f55a;
                    border-color: #fc5555;

                    &:before {
                        background-color: rgba(255, 255, 255, 0);
                        backdrop-filter: blur(0);
                    }
                }

                &.empty {
                    background-color: transparent;
                    border-color: transparent;

                    &:before {
                        background-color: rgba(255, 255, 255, 0);
                        backdrop-filter: blur(0);
                    }
                }
            }

            &-dashbox {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
                pointer-events: none;
                width: 80px;
                height: 80px;
                padding: 4px;

                &.visible {
                    svg {
                        opacity: 1;
                        animation: spinner 4s infinite linear;
                    }
                }

                &.korone {
                    svg {
                        stroke: #c23b64;
                    }
                }

                &.fubuki {
                    svg {
                        stroke: #096b75;
                    }
                }

                svg {
                    width: 72px;
                    height: 72px;
                    fill: transparent;
                    stroke: white;
                    stroke-width: 1;
                    opacity: 0;
                    stroke-dasharray: 20 14.125;
                    stroke-dashoffset: 227.9;
                }
            }
        }

        &-controls {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
        }

        &-score {
            color: white;
            letter-spacing: 2px;
            font-size: 14px;
            font-weight: 300;
            margin-right: 20px;
        }

        &-btn {
            position: relative;
            padding: 20px;
            background-color: rgba(255, 255, 255, .15);
            backdrop-filter: blur(50px);
            cursor: pointer;
            overflow: hidden;
            letter-spacing: 2px;
            font-size: 12px;
            font-weight: 300;
            color: white;
            min-width: 124px;
            transition: background-color .2s ease-in-out;

            &:not(:last-child) {
                margin-right: 20px;
            }

            &:hover {
                background-color: rgba(255, 255, 255, .25);

                &:before {
                    left: 0;
                }
            }

            &:before {
                display: block;
                content: '';
                position: absolute;
                bottom: 0;
                left: -100%;
                width: 100%;
                height: 1px;
                background-color: white;
                transition: left .2s ease-in-out;
            }
        }
    }

    @keyframes spinner {
        0% {
            stroke-dashoffset: 273;
        }

        100% {
            stroke-dashoffset: 0;
        }
    }
</style>
